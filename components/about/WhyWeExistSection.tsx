"use client";

import { useState } from "react";

const timelineItems = [
    {
        title: "The Beginning",
        description:
            "The founders set out to launch a preschool chain in India, inspired by the quality of UK curricula.",
    },
    {
        title: "Market Exploration",
        description:
            "In researching the market, they spoke with preschool owners across India and other stakeholders.",
    },
    {
        title: "The Discovery",
        description:
            "Many preschool chains already had well-designed, thoughtfully built curricula, but faced a consistent challenge: Schools struggled to find teachers who could execute the curriculum at the intended standard.",
    },
    {
        title: "The Solution",
        description:
            "Teachifyy was created to close this gap. It offers structured training and career pathways for teachers and individuals.",
    },
    {
        title: "The Mission Today",
        description:
            "Teachifyy stands at the intersection of: Curriculum Quality, Teacher Competence, and Structured Career Growth.",
    },
];

export default function WhyWeExistSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center md:text-left mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900">
                        Why We Exist
                    </h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        Tracing our journey from a simple idea to a thriving ecosystem for
                        educators.
                    </p>
                </div>

                {/* ===== DESKTOP / TABLET TIMELINE (md+) ===== */}
                <div className="hidden md:block relative">
                    {/* Horizontal line */}
                    <div className="absolute top-[10px] left-0 right-0 h-[3px] bg-slate-200" />

                    <div className="grid grid-cols-5 relative z-10" onMouseLeave={() => setActiveIndex(0)}>
                        {timelineItems.map((item, i) => {
                            const isActive = activeIndex === i;
                            return (
                                <div 
                                    key={i} 
                                    onMouseEnter={() => setActiveIndex(i)}
                                    className={`flex flex-col items-start pr-6 cursor-pointer transition-all duration-300 ${isActive ? '-translate-y-1 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
                                >
                                    {/* Dot */}
                                    <div className={`w-5 h-5 rounded-full ring-4 ring-white mb-6 shrink-0 transition-all duration-300 ${isActive ? 'bg-[#FF4667] scale-125 shadow-md' : 'bg-slate-400 shadow-sm'}`} />

                                    {/* Content */}
                                    <h3 className={`font-bold text-[15px] leading-snug mb-1.5 transition-colors duration-300 ${isActive ? 'text-[#FF4667]' : 'text-slate-500'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ===== MOBILE TIMELINE (below md) ===== */}
                <div className="md:hidden relative pl-8">
                    {/* Vertical line */}
                    <div className="absolute top-0 bottom-0 left-[9px] w-[3px] bg-slate-200" />

                    <div className="space-y-10">
                        {timelineItems.map((item, i) => (
                            <div key={i} className="relative">
                                {/* Dot */}
                                <div className="absolute -left-8 top-0.5 w-5 h-5 bg-[#1F4862] rounded-full ring-4 ring-white shadow-md" />

                                {/* Content */}
                                <h3 className="font-bold text-slate-900 text-base mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
