'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ContactFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default

    const faqs = [
        {
            question: "What subjects will I be able to teach after completing the course/coaching?",
            answer:
                "The course teaches you how to teach, giving you the skills needed at every step instead of focusing on one subject."
        },
        {
            question: "How does this course help me stand out in interviews?",
            answer:
                "By the end of the course you’ll already have practical teaching experience, polished communication, and case studies to showcase in interviews."
        },
        {
            question: "Is Teachifyy only for new teachers?",
            answer:
                "No, it’s for all teachers. Whether you’re starting out or already experienced, you’ll find guidance that fits your journey."
        },
        {
            question: "Can Teachifyy help me explore international teaching opportunities?",
            answer:
                "Yes, we are structured to meet international requirements and you may have guidance for placements in various countries."
        },
        {
            question: "Will I have access to mentors during the course?",
            answer:
                "Yes, whenever you have a doubt, you can raise it and they’ll guide you with clear solutions and support."
        },
        {
            question: "What if I don’t have a B.Ed? Can I still get into the course?",
            answer:
                "Yes! A B.Ed is not a requirement. The only thing you need is the desire to become a teacher. Once you join, the journey can be planned accordingly."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden transition-all duration-200">
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    >
                        <span className="font-semibold text-zinc-800 pr-8 text-lg">
                            {index + 1}. {faq.question}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                        )}
                    </button>

                    <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <p className="text-zinc-600 text-base leading-relaxed pl-6 border-l-2 border-primary/20">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactFaq;
