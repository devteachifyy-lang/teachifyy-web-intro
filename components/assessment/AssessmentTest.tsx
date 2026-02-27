"use client";

import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import {
    useGetAssessmentQuestionsQuery,
    useSubmitAssessmentTestMutation,
} from '@/app/api/assessment';
import {
    Chart as ChartJS,
    Chart,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface QuestionOption {
    A: string;
    B: string;
    C: string;
    D: string;
}

interface Question {
    id: string;
    text: string;
    options: QuestionOption;
}

interface CategoryFeedback {
    label: string;
    rating: string;
    feedbackText: string;
}

interface AssessmentResult {
    totalScore: number;
    totalQuestions: number;
    categoryScores: Record<string, number>;
    categoryRatings: Record<string, string>;
    categoryFeedback: Record<string, CategoryFeedback>;
    categories: Record<string, string>;
}

export default function AssessmentTest() {
    const router = useRouter();
    const resultRef = useRef<HTMLDivElement>(null);
    // ref to the Chart.js instance so we can grab the canvas for PDF
    const chartRef = useRef<Chart<'polarArea'>>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [message, setMessage] = useState('');
    const [userLeadId, setUserLeadId] = useState<string | null>(null);
    const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
    const [name, setName] = useState<string | null>(null);

    // Fetch assessment questions using TanStack Query
    const { data: questionsData, isLoading: isLoadingQuestions, isError: isQuestionsError } = useGetAssessmentQuestionsQuery();

    // Submit assessment test mutation
    const { mutate: submitTest, isPending: isSubmitting, isSuccess: isSubmitSuccess } = useSubmitAssessmentTestMutation();

    // Parse questions from response
    const questions: Question[] = React.useMemo(() => {
        if (!questionsData?.data) return [];
        const rawData = questionsData.data?.data?.questions || questionsData.data?.questions || questionsData.data?.data || questionsData.data || [];

        if (Array.isArray(rawData) && rawData.length > 0) {
            return rawData.map((q: any) => ({
                id: q.questionNo,
                text: q.questionText || q.question || q.text || q.title || '',
                options: {
                    A: q.optionA || q.a || q.option_a || q.options?.A || q.A || '',
                    B: q.optionB || q.b || q.option_b || q.options?.B || q.B || '',
                    C: q.optionC || q.c || q.option_c || q.options?.C || q.C || '',
                    D: q.optionD || q.d || q.option_d || q.options?.D || q.D || ''
                }
            }));
        }
        return [];
    }, [questionsData]);

    useEffect(() => {
        const id = localStorage.getItem('assessmentId');
        if (id) {
            setUserLeadId(id);
        } else {
            console.warn('No assessmentId found in localStorage');
        }

        const storedName = localStorage.getItem('fullName');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    useEffect(() => {
        if (isQuestionsError) {
            setMessage('Failed to load questions. Please check your internet connection.');
        }
    }, [isQuestionsError]);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleOptionSelect = (optionKey: string) => {
        if (!currentQuestion) return;
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionKey }));
    };

    const handleNext = () => {
        if (!currentQuestion) return;
        if (!answers[currentQuestion.id]) {
            alert('Please select an option before proceeding.');
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        if (!currentQuestion) return;
        if (!answers[currentQuestion.id]) {
            alert('Please select an option before submitting.');
            return;
        }

        if (!userLeadId) {
            setMessage('User Lead ID not found. Return to the assessment form and submit it first.');
            return;
        }

        setMessage('');

        submitTest(
            {
                userLeadId: userLeadId,
                answers: answers,
            },
            {
                onSuccess: (response) => {
                    if (response?.data?.data) {
                        setAssessmentResult(response.data.data);
                    } else if (response?.data) {
                        setAssessmentResult(response.data);
                    }
                    setMessage('Your assessment test has been submitted successfully!');
                },
                onError: (error) => {
                    console.error('Submission error:', error);
                    setMessage('There was an error submitting your test. Please try again.');
                },
            }
        );
    };

    const handleDownloadPDF = async () => {
        if (!assessmentResult) return;
        setIsDownloading(true);
        try {
            // ── 1. Grab chart image from the live Chart.js canvas ──────────────────
            const chartCanvas = chartRef.current?.canvas;
            const chartImgData = chartCanvas ? chartCanvas.toDataURL('image/png') : null;

            // ── 2. PDF setup (A4) ──────────────────────────────────────────────────
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pageW = 210;
            const margin = 14;
            const contentW = pageW - margin * 2;
            let y = 18; // current y cursor

            const ratingColor = (rating: string): [number, number, number] => {
                if (rating === 'Poor') return [220, 38, 38];
                if (rating === 'Satisfactory') return [202, 138, 4];
                return [22, 163, 74];
            };
            const ratingBg = (rating: string): [number, number, number] => {
                if (rating === 'Poor') return [254, 226, 226];
                if (rating === 'Satisfactory') return [254, 249, 195];
                return [220, 252, 231];
            };

            // ── 3. Header icon (plain circle + checkmark drawn as lines) ──────────
            const cx = pageW / 2;
            pdf.setFillColor(219, 234, 254); // blue-100
            pdf.circle(cx, y, 7, 'F');
            // Draw a simple checkmark using lines (no unicode needed)
            pdf.setDrawColor(37, 99, 235);
            pdf.setLineWidth(0.8);
            pdf.line(cx - 3, y, cx - 1, y + 2.5);
            pdf.line(cx - 1, y + 2.5, cx + 3.5, y - 3);
            pdf.setLineWidth(0.2);
            y += 13;

            // ── 4. Title ──────────────────────────────────────────────────────────
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(16);
            pdf.setTextColor(17, 24, 39);
            pdf.text(`Assessment Results for ${name || ''}`, pageW / 2, y, { align: 'center' });
            y += 9;

            // ── 5. Score line — single consistent font size, left-anchored ────────
            // All measured at the same size (11pt) to avoid width calculation bugs
            const scoreFontSize = 11;
            pdf.setFontSize(scoreFontSize);
            const prefix = 'You scored ';
            const score = `${assessmentResult.totalScore}`;
            const suffix = ` out of ${assessmentResult.totalQuestions}`;

            // Measure all three pieces at the same font size so math is consistent
            pdf.setFont('helvetica', 'normal');
            const prefixW = pdf.getTextWidth(prefix);
            pdf.setFont('helvetica', 'bold');
            const scoreW = pdf.getTextWidth(score);
            pdf.setFont('helvetica', 'normal');
            const suffixW = pdf.getTextWidth(suffix);
            const totalW = prefixW + scoreW + suffixW;

            // Start x so the whole string is centered
            const lineStartX = pageW / 2 - totalW / 2;

            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(107, 114, 128);
            pdf.text(prefix, lineStartX, y);

            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(37, 99, 235);
            pdf.text(score, lineStartX + prefixW, y);

            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(107, 114, 128);
            pdf.text(suffix, lineStartX + prefixW + scoreW, y);
            y += 10;

            // ── 6. Divider ────────────────────────────────────────────────────────
            pdf.setDrawColor(229, 231, 235);
            pdf.line(margin, y, pageW - margin, y);
            y += 8;

            // ── 7. Chart image ────────────────────────────────────────────────────
            if (chartImgData) {
                const chartWidth = 160;
                const chartHeight = 100;
                const chartX = (pageW - chartWidth) / 2;
                pdf.addImage(chartImgData, 'PNG', chartX, y, chartWidth, chartHeight);
                y += chartHeight + 8;
            }

            pdf.setDrawColor(229, 231, 235);
            pdf.line(margin, y, pageW - margin, y);
            y += 8;

            // ── 8. Category feedback cards ────────────────────────────────────────
            pdf.setFontSize(13);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(17, 24, 39);
            pdf.text('Category Feedback', margin, y);
            y += 8;

            const entries = Object.entries(assessmentResult.categoryFeedback);
            for (const [, fb] of entries) {
                // Measure content at correct font sizes before drawing
                pdf.setFontSize(10);
                const labelLines: string[] = pdf.splitTextToSize(fb.label, contentW - 38);
                pdf.setFontSize(9);
                const feedbackLines: string[] = pdf.splitTextToSize(fb.feedbackText, contentW - 6);

                const labelBlockH = labelLines.length * 5.5;
                const feedbackBlockH = feedbackLines.length * 4.8;
                const cardH = 5 + labelBlockH + 4 + feedbackBlockH + 6;

                // New page if not enough room
                if (y + cardH > 282) {
                    pdf.addPage();
                    y = 16;
                }

                // Card background + border
                pdf.setFillColor(249, 250, 251);
                pdf.setDrawColor(229, 231, 235);
                pdf.roundedRect(margin, y, contentW, cardH, 3, 3, 'FD');

                // Rating badge (top-right of card) — measure first
                pdf.setFontSize(8);
                pdf.setFont('helvetica', 'bold');
                const badgeText = fb.rating;
                const badgeW = pdf.getTextWidth(badgeText) + 8;
                const badgeH = 6;
                const badgeX = margin + contentW - badgeW - 4;
                const badgeY = y + 4;
                pdf.setFillColor(...ratingBg(fb.rating));
                pdf.roundedRect(badgeX, badgeY, badgeW, badgeH, 1.5, 1.5, 'F');
                pdf.setTextColor(...ratingColor(fb.rating));
                pdf.text(badgeText, badgeX + badgeW / 2, badgeY + 4.3, { align: 'center' });

                // Category label
                pdf.setFontSize(10);
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(31, 41, 55);
                pdf.text(labelLines, margin + 4, y + 8);

                // Feedback text
                const feedbackY = y + 5 + labelBlockH + 5;
                pdf.setFontSize(9);
                pdf.setFont('helvetica', 'normal');
                pdf.setTextColor(107, 114, 128);
                pdf.text(feedbackLines, margin + 4, feedbackY);

                y += cardH + 5;
            }

            // ── 9. Footer ─────────────────────────────────────────────────────────
            if (y + 12 > 282) { pdf.addPage(); y = 16; }
            y += 6;
            pdf.setFontSize(8);
            pdf.setTextColor(156, 163, 175);
            pdf.setFont('helvetica', 'normal');
            pdf.text(`Generated on ${new Date().toLocaleDateString()}`, margin, y);
            pdf.text('Teachifyy Assessment Report', pageW - margin, y, { align: 'right' });

            pdf.save(`${name || 'assessment'}_results.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    if (isLoadingQuestions) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-3xl mx-auto mt-8 border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium">Loading your assessment questions...</p>
            </div>
        );
    }

    if (isSubmitSuccess && assessmentResult) {
        const labels = Object.values(assessmentResult.categoryFeedback).map((f: any) => f.label);
        const data = Object.keys(assessmentResult.categoryFeedback).map((key: string) => assessmentResult.categoryScores[key] || 0);

        const chartData = {
            labels,
            datasets: [
                {
                    label: 'Score',
                    data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    max: 4,
                    ticks: {
                        stepSize: 1,
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom' as const,
                }
            }
        };

        return (
            <div ref={resultRef} className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto mt-8 border border-gray-100">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Results for {name} </h2>
                    <p className="text-gray-600 mb-6">You scored <span className="font-bold text-blue-600 text-xl">{assessmentResult.totalScore}</span> out of {assessmentResult.totalQuestions}</p>
                </div>

                <div className="mb-10 flex justify-center h-[400px]">
                    <PolarArea ref={chartRef} data={chartData} options={chartOptions} />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(assessmentResult.categoryFeedback).map(([key, feedback]) => (
                        <div key={key} className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-semibold text-gray-800 flex-1 pr-4">{feedback.label}</h4>
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${feedback.rating === 'Poor' ? 'bg-red-100 text-red-700' :
                                    feedback.rating === 'Satisfactory' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                    {feedback.rating}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm flex-1">{feedback.feedbackText}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button
                        onClick={handleDownloadPDF}
                        disabled={isDownloading}
                        className="px-8 py-2.5 bg-green-600 text-white hover:bg-green-700 font-semibold rounded-xl shadow-sm transition-all"
                    >
                        {isDownloading ? 'Downloading...' : 'Download PDF'}
                    </Button>
                    <Button
                        onClick={() => router.push('/')}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm transition-all"
                    >
                        Return Home
                    </Button>
                </div>
            </div>
        );
    }

    if (!questions || questions.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mt-12 text-center border border-gray-100">
                <h2 className="text-xl font-bold text-red-600 mb-2">Oops!</h2>
                <p className="text-gray-600">{message || 'No questions found. Please try again later.'}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto mt-8 border border-gray-100">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Assessment Test</h2>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
            </div>

            {message && !isSubmitSuccess && (
                <div className="mb-6 rounded-md bg-red-50 p-4 border border-red-200">
                    <div className="text-sm font-medium text-red-800">{message}</div>
                </div>
            )}

            <div className="mb-8 min-h-[300px]">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
                    {currentQuestionIndex + 1}. {currentQuestion.text}
                </h3>

                <div className="space-y-3">
                    {Object.entries(currentQuestion.options).map(([key, value]) => {
                        const isSelected = answers[currentQuestion.id] === key;
                        return (
                            <button
                                key={key}
                                onClick={() => handleOptionSelect(key)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isSelected
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-gray-200 hover:border-primary/50 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="font-bold mr-3">{key}.</span>
                                {value}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <Button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0 || isSubmitting}
                    className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold rounded-xl disabled:opacity-50 transition-all shadow-sm"
                >
                    Previous
                </Button>

                {isLastQuestion ? (
                    <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm disabled:opacity-50 transition-all"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm transition-all"
                    >
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
}
