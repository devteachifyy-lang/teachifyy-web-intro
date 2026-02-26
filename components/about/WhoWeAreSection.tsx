import { ArrowRight, Check } from 'lucide-react';

export default function WhoWeAreSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Who We Are Card */}
                    <div className="bg-[#2A4C7A] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            {/* <div className="w-12 h-8 bg-blue-100 rounded-sm mb-4"></div> */}
                            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Who We Are</h2>
                        </div>
                        <p className="text-blue-100/90 leading-relaxed text-lg mb-8 md:mb-12">
                            Teachifyy is more than just a platform. It's a movement that believes in the brilliance and potential of every single teacher across the globe. We believe that we are creators, makers, and every progress.
                        </p>

                        <div className="mt-auto">
                            <button className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity">
                                Our Mission <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* What We Do Card */}
                    <div className="bg-[#FFE9ED] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative">
                        <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#1F4862]">What We Do</h2>

                        <ul className="space-y-4 mb-8 md:mb-12">
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">—</span>
                                <span className="text-slate-700 text-lg">Curated and progressive learning</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">—</span>
                                <span className="text-slate-700 text-lg">Industry-recognized certification</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">—</span>
                                <span className="text-slate-700 text-lg">Mentorship and peer networking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#1F4862] mt-1 shrink-0">—</span>
                                <span className="text-slate-700 text-lg">Resource & career support center</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <button className="flex items-center gap-2 text-[#1F4862] font-medium hover:opacity-80 transition-opacity">
                                Learn More <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
