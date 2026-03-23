"use client";

import React, { useState } from "react";
import Image from "next/image";

const teachifyyItems = [
  { title: "Applied child development", desc: "Prepares you to teach with respect to how children grow, learn, and develop." },
  { title: "Built-For-Impact Curriculum", desc: "Builds your skills, confidence, employability, and earning potential." },
  { title: "Capability Building", desc: "Continuous assessment to support progress and strengthen capability." },
  { title: "Distinct Voice", desc: "Develops your ability to listen actively and express yourself with confidence." },
  { title: "Ethical Excellence", desc: "Ethical practice is the pathway to professionalism, reflection, and lasting growth." }
];

const othersItems = [
  { title: "Academic heavy", desc: "Focuses on theory overload instead of practical teaching application." },
  { title: "Benchmarks", desc: "Measures success by scores and numbers rather than real skills." },
  { title: "Certificate", desc: "Treats the certificate as the end goal instead of ongoing growth." },
  { title: "Download & Forget", desc: "Provides content to consume once without lasting practice or support." },
  { title: "Early Exit", desc: "Encourages quick completion rather than sustained professional development." }
];

const AbcdeSection = () => {
  const [activeCard, setActiveCard] = useState<'teachifyy' | 'others'>('teachifyy');

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 flex items-start gap-12 lg:gap-24 flex-col lg:flex-row">
        {/* Left Side (Text and Header) */}
        <div className="flex-1 lg:max-w-[380px] pt-8 lg:pt-20">
          <div className="inline-flex items-center bg-[#DDE6F2] text-[#111827] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-8">
            RETHINKING TEACHER TRAINING
          </div>
          <h2 className="text-[#111827] text-[40px] md:text-[54px] font-bold font-sans tracking-tight mb-8 leading-[1.15]">
            The{" "}
            <span className="bg-gradient-to-r from-[#FF4667] to-[#2A4C7A] text-transparent bg-clip-text">
              ABCDE s
            </span>
            <br />
            of Teacher <br />
            Development
          </h2>
          <p className="text-[#475569] text-[14px] md:text-[15px] font-sans pr-4 leading-relaxed">
            Most programs get this wrong. Here is how Teachifyy gets it right.
          </p>
        </div>

        {/* Right Side (Comparison Cards) */}
        <div className="flex-1 w-full flex flex-col xl:flex-row relative mt-12 lg:mt-0 xl:-ml-6 items-stretch">
          {/* Teachifyy Card (Left) */}
          <div
            onMouseEnter={() => setActiveCard('teachifyy')}
            className={`w-full xl:w-[55%] lg:max-w-[500px] xl:max-w-none rounded-[28px] md:rounded-[32px] p-6 sm:p-8 flex flex-col relative py-8 transition-all duration-300 ease-in-out cursor-default ${
              activeCard === 'teachifyy'
                ? 'z-10 bg-[#2C4A70] shadow-2xl scale-[1.02] border-transparent'
                : 'z-0 bg-[#f4f4f5] shadow-sm xl:scale-95 border border-gray-100 opacity-90'
            }`}
          >
            {/* Header */}
            <div className="mb-6 md:mb-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 transition-colors duration-300 ${activeCard === 'teachifyy' ? 'text-white' : 'text-[#9ca3af]'}`}>
                  <path d="M12 3L1 9L12 15L21 10.0909V17H23V9L12 3Z" fill="currentColor"/>
                  <path d="M5 13.1818V17.2727C5 17.2727 8 22 12 22C16 22 19 17.2727 19 17.2727V13.1818L12 17L5 13.1818Z" fill="currentColor"/>
                </svg>
                <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${activeCard === 'teachifyy' ? 'text-white' : 'text-[#9ca3af]'}`}>Teachifyy</h3>
              </div>
              <div className={`h-[1px] w-full mt-5 md:mt-6 transition-colors duration-300 ${activeCard === 'teachifyy' ? 'bg-white/20' : 'bg-[#d1d5db]'}`}></div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-5 md:gap-6 flex-1">
              {teachifyyItems.map((item, i) => (
                <div key={i} className="flex gap-3 md:gap-4 items-start group">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-300 ${activeCard === 'teachifyy' ? 'bg-white' : 'bg-[#d1d5db]'}`}></div>
                  <div>
                    <h4 className={`text-[15px] md:text-[16px] font-bold mb-0.5 leading-tight tracking-tight transition-colors duration-300 ${activeCard === 'teachifyy' ? 'text-white' : 'text-[#a1a1aa]'}`}>{item.title}</h4>
                    <p className={`text-[12px] md:text-[13px] leading-relaxed pr-2 transition-colors duration-300 ${activeCard === 'teachifyy' ? 'text-white/80' : 'text-[#a1a1aa]'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Others Card (Right) */}
          <div
            onMouseEnter={() => setActiveCard('others')}
            onMouseLeave={() => setActiveCard('teachifyy')}
            className={`w-full xl:w-[55%] lg:max-w-[500px] xl:max-w-none rounded-[28px] md:rounded-[32px] xl:-ml-[10%] p-6 sm:p-8 xl:pl-[12%] flex flex-col mt-4 xl:mt-8 py-8 transition-all duration-300 ease-in-out cursor-default ${
              activeCard === 'others'
                ? 'z-10 bg-[#2C4A70] shadow-2xl scale-[1.02] border-transparent'
                : 'z-0 bg-[#f4f4f5] shadow-sm xl:scale-95 border border-gray-100 opacity-90'
            }`}
          >
            <div className="mb-6 md:mb-8">
              <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${activeCard === 'others' ? 'text-white' : 'text-[#9ca3af]'}`}>Others...</h3>
              <div className={`h-[1px] w-full mt-5 md:mt-6 transition-colors duration-300 ${activeCard === 'others' ? 'bg-white/20' : 'bg-[#d1d5db]'}`}></div>
            </div>
            
            <div className="flex flex-col gap-5 md:gap-6 flex-1">
              {othersItems.map((item, i) => (
                <div key={i} className="flex gap-3 md:gap-4 items-start group">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-300 ${activeCard === 'others' ? 'bg-white' : 'bg-[#d1d5db]'}`}></div>
                  <div>
                    <h4 className={`text-[15px] md:text-[16px] font-bold mb-0.5 leading-tight tracking-tight transition-colors duration-300 ${activeCard === 'others' ? 'text-white' : 'text-[#a1a1aa]'}`}>{item.title}</h4>
                    <p className={`text-[12px] md:text-[13px] leading-relaxed pr-2 transition-colors duration-300 ${activeCard === 'others' ? 'text-white/80' : 'text-[#a1a1aa]'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbcdeSection;
