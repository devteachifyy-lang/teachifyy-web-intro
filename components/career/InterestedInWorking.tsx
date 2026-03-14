import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function InterestedInWorking() {
  return (
    <section id="opportunities" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 shadow-sm mb-6">
            <span className="text-xs font-semibold text-slate-700 tracking-widest uppercase">OPEN TO CONVERSATIONS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Interested in Working With Teachifyy?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            If you believe in building better learning experiences for educators, send us a message and tell us about yourself, your background, what you care about, and how you&apos;d like to contribute.
          </p>

          <Link
            href="mailto:support@teachifyy.com"
            className="inline-flex items-center gap-2 bg-[#ff4d67] text-white font-medium text-[15px] pt-[12px] pb-[12px] px-[28px] rounded-xl hover:bg-[#ff3b57] transition-all"
          >
            Share your Profile
            <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="text-slate-400 text-[13px] mt-4">We review every message and will reach out when opportunities align.
          </p>
        </div>
      </div>
    </section>
  );
}
