import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticleSection from '@/components/blog/FeaturedArticleSection';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogListSection from '@/components/blog/BlogListSection';
import BlogCTA from '@/components/blog/BlogCTA';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: 'Insights for Teachers Who Want to Grow',
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <BlogHero />
      <FeaturedArticleSection />
      <BlogCategories />
      <BlogListSection />
      <BlogCTA />
      <BlogNewsletter />
    </div>
  );
}
