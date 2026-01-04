"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will I get a job?",
      answer: "Most students already get entry-level jobs. Teachifyy helps you grow beyond them.",
      delay: "0.2s"
    },
    {
      question: "Will schools respect this?",
      answer: "The diploma is built around real classroom expectations — not theory.",
      delay: "0.25s"
    },
    {
      question: "Is this better than B.Ed?",
      answer: "B.Ed qualifies you. Teachifyy prepares you.",
      delay: "0.3s"
    },
    {
      question: "Is this worth the investment?",
      answer: "This is a one-time investment to avoid long-term stagnation.",
      delay: "0.35s"
    },
    {
      question: "Who else has done this?",
      answer: "Teachers from diverse backgrounds have used this to build confidence and credibility.",
      delay: "0.4s"
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">Questions</span>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight animate-slide-up"
              style={{ 
                animationDelay: "0.15s", 
                opacity: 0, 
                animationFillMode: "forwards",
                letterSpacing: "-0.01em"
              }}
            >
              <span className="text-dark-900">Common questions,</span>
              <br />
              <span className="gradient-text">honest answers</span>
            </h2>

            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
            >
              Everything you need to know before taking the next step
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="group relative animate-slide-up"
                  style={{ 
                    animationDelay: faq.delay, 
                    opacity: 0, 
                    animationFillMode: "forwards" 
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  {/* Main card */}
                  <div className={`relative card overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}`}>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors group/button"
                    >
                      <div className="flex items-center gap-4 flex-1 pr-4">
                        {/* Indicator */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-br from-primary to-primary-600' 
                            : 'bg-gradient-to-br from-primary/10 to-primary/5 group-hover/button:from-primary/20 group-hover/button:to-primary/10'
                        }`}>
                          <CheckCircle className={`w-5 h-5 transition-all duration-300 ${
                            isOpen ? 'text-white scale-110' : 'text-primary'
                          }`} />
                        </div>

                        <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                          isOpen ? 'text-dark-900' : 'text-gray-800 group-hover/button:text-dark-900'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>

                      <ChevronDown
                        className={`w-6 h-6 text-primary flex-shrink-0 transition-all duration-300 ${
                          isOpen ? "rotate-180 scale-110" : "group-hover/button:scale-110"
                        }`}
                      />
                    </button>

                    {/* Answer with smooth expansion */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="ml-12 p-4 bg-gradient-to-br from-primary-50/50 to-dark-50/30 rounded-xl border-l-4 border-primary">
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA hint */}
          <div 
            className="mt-12 text-center animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline transition-all">
                Talk to a counsellor
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
