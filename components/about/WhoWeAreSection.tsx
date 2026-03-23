import { ArrowRight, BookOpenCheck, Check, UsersRound } from 'lucide-react';

export default function WhoWeAreSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Who We Are Card */}
                    <div className="bg-[#2A4C7A] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-start">
                        <div className="w-14 h-14 bg-[#FFE9ED] rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-sm">
                            <UsersRound className="w-7 h-7 text-[#2A4C7A]" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Who We Are</h2>
                        <p className="text-blue-100/90 leading-relaxed text-lg">
                            Teachifyy is more than just a platform, it is a movement dedicated to the professional and personal upliftment of educators worldwide. We believe that when teachers thrive, humanity progresses.
                        </p>
                    </div>

                    {/* What We Do Card */}
                    <div className="bg-[#FFE9ED] rounded-3xl p-8 md:p-12 flex flex-col justify-start relative">
                        <div className="w-14 h-14 bg-[#2A4C7A] rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-sm">
                            <BookOpenCheck className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6 text-[#1F4862]">What We Do</h2>

                        <ul className="space-y-4 mb-8 md:mb-12">
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">•</span>
                                <span className="text-slate-700 text-lg">Specialized pedagogical training</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">•</span>
                                <span className="text-slate-700 text-lg">Industry-recognized certifications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">•</span>
                                <span className="text-slate-700 text-lg">Mentorship and global networking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">•</span>
                                <span className="text-slate-700 text-lg">Placement & career acceleration</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
