import Link from 'next/link';

export default function CareerBottomCta() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="bg-[#0E172B] rounded-3xl py-16 px-8 md:px-16 text-center max-w-3xl mx-auto">
          {/* Small label */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-[#DDE6F2] px-4 py-1.5 mb-6">
            <span className="text-xs  uppercase">OUR BELIEF</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-[1.2] tracking-tight">
            Teaching Requires
            <br />
            Continuous Learning
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            We are building a platform that supports educators everywhere, one meaningful experience at a time.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white  font-medium text-[15px] py-3 px-8 rounded-full bg-white"
          >
            Connect with us
          </Link>
        </div>
      </div>
    </section>
  );
}
