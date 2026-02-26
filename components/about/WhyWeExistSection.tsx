export default function WhyWeExistSection() {
    return (
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Why We Exist</h2>
                    <p className="text-slate-600 max-w-2xl text-lg">
                        Tracing our journey from a simple idea to a thriving ecosystem for educators.
                    </p>
                </div>

                {/* Timeline Graphic */}
                <div className="relative mt-24 mb-12 px-4 md:px-0">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block"></div>

                    <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-0">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative gap-6 md:gap-8 group">
                                {/* Visual Dot */}
                                <div className="w-5 h-5 bg-[#243B53] rounded-full shadow-lg ring-4 ring-white md:bg-[#1F4862] transition-transform group-hover:scale-125 z-10" />

                                {/* Content could go here if there were any text underneath each dot */}
                                {/* <div className="text-center md:absolute md:top-12 md:w-32">
                     <p className="font-semibold text-slate-800">202{item}</p>
                     <p className="text-sm text-slate-500">Milestone</p>
                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
