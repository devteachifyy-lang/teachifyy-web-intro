import { mockBlogData } from '@/app/blog/[id]/mockData';
import { Quote } from 'lucide-react';

export default function BlogQuote({ data }: { data: typeof mockBlogData.data.quoteSection }) {
    return (
        <section className="pb-12">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="bg-[#FF4667] rounded-3xl p-8 md:p-16 text-center text-white relative flex flex-col items-center justify-center shadow-md overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
                    <Quote className="w-12 h-12 text-white/50 mb-6" fill="currentColor" />
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight z-10 relative text-white">
                        {data.quote}
                    </h2>
                </div>
            </div>
        </section>
    );
}
