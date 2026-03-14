const categories = ['All', 'Early Development', 'Practice Learning', 'Student Growth'];

export default function BlogCategories() {
  return (
    <section className="py-6">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                idx === 0 
                ? 'bg-dark-900 text-white shadow-md shadow-dark-900/10' 
                : 'bg-[#F0F4F8] text-dark-600 hover:bg-[#E2E8F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
