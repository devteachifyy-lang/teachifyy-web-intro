import React from 'react';

const TeacherOutcomeSection = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-24">
      <div className="max-w-[1248px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Badge with side lines */}
          <div className="flex items-center justify-center w-full max-w-3xl mx-auto mb-8">
            <div className="h-[1px] w-16 sm:w-24 md:w-40 bg-gray-300"></div>
            <span className="mx-4 px-4 py-1.5 rounded-full bg-[#fce4e8] text-[#111827] text-xs sm:text-sm tracking-wide uppercase">
              REAL TEACHER OUTCOME
            </span>
            <div className="h-[1px] w-16 sm:w-24 md:w-40 bg-gray-300"></div>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[38px] md:text-[46px] leading-tight font-light text-[#111827] mb-6 text-center tracking-tight font-Inter">
            Educators Are <span className="text-[#FF4D67] font-bold">Now Earning ₹40K+</span>
          </h2>

          {/* Description */}
          <p className="text-[#64748b] text-[16px] md:text-[18px] text-center max-w-2xl mx-auto leading-relaxed font-Inter">
            We don&apos;t just train teachers — we transform careers. Here&apos;s <br className="hidden md:block" />
            the real difference Teachifyy makes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherOutcomeSection;
