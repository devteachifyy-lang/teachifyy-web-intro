export default function BlogNewsletter() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_40px_rgb(0,0,0,0.06)] p-8 md:p-14 max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
          <div className="flex-1 space-y-4">
            <h2 className="text-[1.75rem] md:text-3xl font-bold text-gray-900 tracking-tight">
              Stay Updated with Teacher Insights
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto md:mx-0 pr-4">
              Receive new articles, teaching strategies, and educator resources directly in your inbox. No spam, just pure pedagogical value.
            </p>
          </div>
          <div className="w-full md:w-auto md:min-w-[420px]">
            <div className="bg-white border border-gray-200 rounded-full p-1.5 flex flex-col sm:flex-row shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
              <input
                type="email"
                placeholder="Your email id"
                className="flex-1 w-full pl-6 pr-4 py-3 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-[15px]"
              />
              <button className="bg-dark-900 hover:bg-dark-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors text-[15px] whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-gray-400 mt-4 ml-4 text-left">
              By subscribing, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
