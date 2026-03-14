import Link from 'next/link';

export default function BlogCTA() {
  return (
    <section className="bg-[#0E172B] py-20 md:py-24 text-center text-white relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-6 text-white text-balance leading-[1.2] tracking-tight">
            Great Teaching Begins with<br className="hidden md:block" /> Continuous Learning
          </h2>
          <p className="text-[#9FB3C8] text-[17px] mb-12 text-balance max-w-2xl leading-relaxed">
            Unlock your full potential as an educator. Join thousands of teachers who are redefining early childhood education through our certified training programs.
          </p>
          <button className="bg-white text-dark-900 hover:bg-gray-50 px-10 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgb(255,255,255,0.2)]">
            Talk to a Counsellor
          </button>
        </div>
      </div>
    </section>
  );
}
