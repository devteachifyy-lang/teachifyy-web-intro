export default function BlogNewsletter() {
    return (
        <section className="pb-20 bg-zinc-50 dark:bg-dark-50">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                            Stay Updated with Teacher Insights
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Receive new articles, teaching strategies, and educator resources directly in your inbox. No spam, just pure pedagogical value</p>
                    </div>
                    <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                        <input
                            type="email"
                            placeholder="Email add..."
                            className="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-full bg-blue-900 hover:bg-blue-800 text-white font-medium transition-colors whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
