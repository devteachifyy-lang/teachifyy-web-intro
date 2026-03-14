import { mockBlogData } from './mockData';
import BlogHero from '@/components/blog/id/BlogHero';
import KeyTakeaways from '@/components/blog/id/KeyTakeaways';
import BlogContentSection from '@/components/blog/id/BlogContentSection';
import BlogQuote from '@/components/blog/id/BlogQuote';
import BlogAdditionalSection from '@/components/blog/id/BlogAdditionalSection';
import BlogCTA from '@/components/blog/id/BlogCTA';
import BlogContinueReading from '@/components/blog/id/BlogContinueReading';
import BlogNewsletter from '@/components/blog/id/BlogNewsletter';
import BlogListSection from '@/components/blog/BlogListSection';

export default function BlogByIdPage() {
    const { data } = mockBlogData;

    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* 
        The top navigation from the layout handles the "Teachifyy | Home Contact..." 
        so we just start with the Hero section. 
      */}
            <BlogHero hero={data.hero} />
            <KeyTakeaways data={data.keyTakeaways} />
            <BlogContentSection content={data.content} />
            {/* <BlogQuote data={data.quoteSection} /> */}
            <BlogAdditionalSection data={data.additionalSection} />
            <BlogCTA />
            {/* <BlogContinueReading /> */}
            <BlogListSection />
            <BlogNewsletter />
        </main>
    );
}
