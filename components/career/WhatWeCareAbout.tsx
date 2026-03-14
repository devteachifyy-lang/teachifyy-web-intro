const values = [
  {
    title: 'Education First',
    description:
      'Everything we build is designed to support teachers and learning communities. Our work starts and ends with the educators experience.',
  },
  {
    title: 'Meaningful Work',
    description:
      'We focus on creating learning experiences that have real, lasting impact not just content that fills a screen, but ideas that change classrooms.',
  },
  {
    title: 'Curiosity and Diversity',
    description:
      'We believe continuous learning applies to everyone at Teachifyy creators, designers, and educators alike. We grow because we stay curious.',
  },
  {
    title: 'Collaboration',
    description:
      'Teachifyy is built through shared ideas, open discussion, and creative thinking. We believe the best work emerges from genuine partnership.',
  },
];

export default function WhatWeCareAbout() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            What We Care About
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Our values define how we work, learn, and grow together - as we build tools for the world&apos;s most important profession.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[16px] font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
