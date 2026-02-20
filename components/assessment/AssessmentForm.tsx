"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { submitAssessment } from '@/lib/api';

export default function AssessmentForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        latestEducation: '',
        profession: '',
        designation: '',
        aspiration: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            await submitAssessment(formData);
            setStatus('success');
            setMessage('Your assessment has been submitted successfully!');
            setFormData({
                name: '', age: '', latestEducation: '', profession: '', designation: '', aspiration: ''
            });
            // Redirect to the assessment test page
            router.push('/assessment-test');
        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage('There was an error submitting your assessment. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'success' && (
                <div className="rounded-md bg-green-50 p-4 border border-green-200">
                    <div className="text-sm font-medium text-green-800">{message}</div>
                </div>
            )}

            {status === 'error' && (
                <div className="rounded-md bg-red-50 p-4 border border-red-200">
                    <div className="text-sm font-medium text-red-800">{message}</div>
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700">
                    Age
                </label>
                <div className="mt-2">
                    <input
                        id="age"
                        name="age"
                        type="number"
                        required
                        min="10"
                        max="100"
                        value={formData.age}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="latestEducation" className="block text-sm font-semibold text-gray-700">
                    Latest Education
                </label>
                <div className="mt-2">
                    <input
                        id="latestEducation"
                        name="latestEducation"
                        type="text"
                        required
                        value={formData.latestEducation}
                        onChange={handleChange}
                        placeholder="e.g. B.Tech, Master's in Computer Science"
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="profession" className="block text-sm font-semibold text-gray-700">
                    Current Profession
                </label>
                <div className="mt-2">
                    <input
                        id="profession"
                        name="profession"
                        type="text"
                        required
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="e.g. Software Engineer, Student"
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="designation" className="block text-sm font-semibold text-gray-700">
                    Current Designation
                </label>
                <div className="mt-2">
                    <input
                        id="designation"
                        name="designation"
                        type="text"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. SDE-1, Non-applicable"
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="aspiration" className="block text-sm font-semibold text-gray-700">
                    Your aspiration in the next five years
                </label>
                <div className="mt-2">
                    <textarea
                        id="aspiration"
                        name="aspiration"
                        rows={4}
                        required
                        value={formData.aspiration}
                        onChange={handleChange}
                        placeholder="Where do you see yourself technically and professionally?"
                        className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                    />
                </div>
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-all"
                >
                    {status === 'loading' ? 'Submitting...' : 'Submit Assessment'}
                </Button>
            </div>
        </form>
    );
}
