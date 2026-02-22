"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AssessmentResultPage() {
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("fullName");
        if (storedName) {
            setFullName(storedName);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50/50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                {/* Success Icon */}
                <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-8 animate-fade-in">
                    <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl mb-4 animate-slide-up">
                    {fullName ? `Assessment Completed, ${fullName}!` : "Assessment Completed!"}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-4 animate-slide-up max-w-lg mx-auto">
                    Thank you for completing the assessment test. Your responses have been
                    submitted successfully across all categories.
                </p>

                <p className="text-gray-500 mb-10 animate-slide-up">
                    Our team will review your responses and get back to you with
                    personalised recommendations for your career path.
                </p>

                {/* Summary Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-dark-100/10 border border-gray-100 p-8 mb-10 animate-slide-up">
                    <h3 className="text-lg font-semibold text-dark-900 mb-6">
                        Categories Completed
                    </h3>
                    <div className="space-y-3">
                        {[
                            "Child Development and Learning Foundations",
                            "Curriculum Design and Instructional Strategies",
                            "Assessment and Observation Practices",
                            "Professionalism, Ethics, and Reflective Practice",
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-100"
                            >
                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold">
                                    ✓
                                </span>
                                <span className="text-sm text-green-800 font-medium text-left">
                                    {category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back to Home */}
                <Link href="/">
                    <Button className="px-8 py-4 rounded-xl text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
