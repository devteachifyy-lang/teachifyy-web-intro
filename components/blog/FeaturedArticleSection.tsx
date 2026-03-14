import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const featuredArticle = {
  image: '/assets/firstBlog.jpg',
  badge: 'FEATURED ARTICLE',
  readTime: '8 min read',
  title: 'Becoming a Cambridge Teacher: Skills, Training, and Mindset You NeedBecoming a Cambridge Teacher: Skills, Training, and Mindset You Need',
  description: 'A comprehensive guide for educators looking to transition into the Cambridge international framework, focusing on pedagogical excellence and global standards.',
};

export default function FeaturedArticleSection() {
  return (
    <section className="pb-16 mt-6">
      <div className="container-custom max-w-5xl">
        <Link href="/blog/1" className="bg-white rounded-[2rem] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row p-3 gap-8 items-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all ">
          <div className="w-full md:w-[50%] relative aspect-[4/3] rounded-3xl overflow-hidden self-stretch">
            <Image
              src={featuredArticle.image}
              alt="Featured Article"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="w-full md:w-[50%] py-8 pr-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-[#EBF3FB] text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {featuredArticle.badge}
              </span>
              <span className="text-sm text-gray-400 font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
                {featuredArticle.readTime}
              </span>
            </div>
            <h2 className="text-[1.75rem] md:text-xl text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors tracking-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {featuredArticle.description}
            </p>
            <div className="mt-auto flex justify-end">
              <span className="inline-flex items-center gap-2 text-[15px] font-bold text-gray-900 group-hover:text-primary transition-colors">
                Read Article <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
