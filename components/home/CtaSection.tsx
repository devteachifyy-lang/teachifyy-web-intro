import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full bg-[#0E172B] py-24 px-6 relative overflow-hidden">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center relative z-10">
        {/* Badge */}
        {/* <div className="inline-flex items-center bg-[#DDE6F2] text-[#000000] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-8">
          TAKE THE FIRST STEP
        </div> */}

        {/* Heading */}
        <h2 className="text-white text-[35px] md:text-[40px] lg:text-[48px] font-bold leading-tight mb-6 font-sans tracking-tight">
          Teaching Requires Continuous
          Learning <br className="hidden md:block" />
        </h2>

        {/* Subheading */}
        <p className="text-white/90 text-[15px] md:text-[16px]  leading-relaxed mb-12 font-[300] tracking-wide">
          Join  specialized educators worldwide who are redefining the boundaries of the classroom.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button className="bg-white text-[#0F172A] font-[400] text-[16px] px-[60px] py-[10px] rounded-full hover:bg-slate-100 transition-colors shadow-sm">
            Talk to a Counsellor
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
