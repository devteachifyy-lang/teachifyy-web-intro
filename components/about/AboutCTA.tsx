"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-dark-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <div 
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-dark-100/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline indicator */}
          <div 
            className="inline-flex items-center gap-2 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Your Next Step</span>
          </div>

          {/* Main content card with enhanced depth */}
          <div 
            className="relative group animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* Hover glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/10 to-dark-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            
            {/* Main card */}
            <div className="relative card p-10 md:p-16 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Main message with emphasis */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-dark-900 tracking-tight" style={{ letterSpacing: "-0.01em" }}>
                This diploma does not change<br />
                <span className="relative inline-block">
                  <span className="text-dark-900">your first salary</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-gray-200 -rotate-1 -z-10" />
                </span>
                .
              </h2>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-2 my-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/30 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary/30 rounded-full" />
              </div>

              {/* Key message with gradient */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-tight">
                <span className="gradient-text">It changes how fast you outgrow it.</span>
              </p>

              {/* CTAs with enhanced interactions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                {/* Primary CTA */}
                <div className="group/cta flex flex-col gap-2">
                  <Link href="/courses">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="relative z-10">Understand the Diploma</span>
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <span className="text-xs text-gray-500 tracking-wide px-1 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300">
                    Explore curriculum & outcomes
                  </span>
                </div>

                {/* Secondary CTA */}
                <div className="group/cta flex flex-col gap-2">
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 hover:-translate-y-1 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 group-hover/cta:scale-110 transition-transform" />
                      <span>Speak to an Advisor</span>
                    </Button>
                  </Link>
                  <span className="text-xs text-gray-500 tracking-wide px-1 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300">
                    Get personalized guidance
                  </span>
                </div>
              </div>

              {/* Trust reinforcement */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Career transformation focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Real classroom practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>School-validated curriculum</span>
                </div>
              </div>

              {/* Bottom decorative bars */}
              <div className="mt-10 flex justify-center gap-2">
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-primary-600 group-hover:w-28 transition-all duration-500" />
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary-600 to-dark-700 opacity-60 group-hover:w-16 transition-all duration-500" />
                <div className="w-6 h-1 rounded-full bg-dark-700 opacity-40 group-hover:w-10 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
