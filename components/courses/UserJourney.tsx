import React from "react";
import { Check, UserCircle, Target, BookOpen, Navigation, PencilLine, MessageCircle, BookOpenText, BriefcaseBusiness } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Tell Your Story ",
        description: "Fill out the form with your background and career goals.",
        icon: <PencilLine className="w-5 h-5 text-[#2C5786]" />,
    },
    {
        id: 2,
        title: "Discover Strengths ",
        description: "Take an assessment to identify skills and growth areas.",
        icon: <Check className="w-5 h-5 text-[#2C5786]" />,
    },
    {
        id: 3,
        title: "Plan Your Career",
        description: "Have a one‑to‑one conversation for personalised guidance.",
        icon: <MessageCircle className="w-5 h-5 text-[#2C5786]" />,
    },
    {
        id: 4,
        title: "Learn",
        description: "Develop practical skills through guided coursework.",
        icon: <BookOpenText className="w-5 h-5 text-[#2C5786]" />,
    },
    {
        id: 5,
        title: "Placement Assistance",
        description: "Land your dream role with our global network.",
        icon: <BriefcaseBusiness className="w-5 h-5 text-[#2C5786]" />,
    },
];

const UserJourney = () => {
    return (
        <section className="py-16 md:py-16 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="mb-10 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                        Steps of User Journey
                    </h2>
                    <p className="text-gray-600 font-medium">
                        A transparent, outcome-oriented journey for every educator.
                    </p>
                </div>

                {/* Desktop View List with flex layout to display steps horizontally */}
                <div className="relative">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-1 lg:items-center">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className=" bg-blue-50 hover:bg-blue-100/80 transition-colors p-2 rounded-2xl border border-blue-100/50 shadow-sm relative group h-40 md:h-48 w-full">
                                    <div className="mb-4">
                                        {/* Icon container */}
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm mb-4">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow connecting the cards - visible only on large screens */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center opacity-40">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserJourney;
