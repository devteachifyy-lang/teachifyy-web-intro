import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogCTA() {
    return (
        <section className="py-16 md:py-20 bg-[#0E172B] text-white text-center">
            <div className="container-custom max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                    Learn How to Integrate AI into Early <br className="hidden md:block" /> Childhood Training
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Teachifyy training programs help educators build practical skills in curriculum design, classroom management, and modern teaching approaches.
                </p>
                <Link
                    href="/courses"
                    className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                >
                    Explore Our Course
                </Link>
            </div>
        </section>
    );
}
