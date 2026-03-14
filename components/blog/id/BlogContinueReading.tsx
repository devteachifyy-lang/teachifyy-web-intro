import { articles } from '@/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';

export default function BlogContinueReading() {
    // Taking 2 articles as dummy related content
    const relatedArticles = articles.slice(0, 2);

    return (
        <section className="py-16 bg-zinc-50 dark:bg-dark-50">
            <div className="container-custom max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    Continue Reading
                </h2>
                <p className="text-zinc-500 mb-8">
                    Learn cutting-edge skills and our latest insights
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
