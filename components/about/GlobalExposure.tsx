"use client";

import { Globe, MapPin, BookOpen, Sparkles } from "lucide-react";

const GlobalExposure = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-dark-100/10 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div 
              className="animate-slide-up"
              style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.1s" }}
            >
              {/* Pre-headline */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary tracking-wide uppercase">International Standards</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark-900 leading-tight tracking-tight" style={{ letterSpacing: "-0.01em" }}>
                Global exposure.<br />
                <span className="gradient-text">Indian classrooms.</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                The diploma draws from <span className="font-semibold text-dark-900">global early-years practices</span> — adapted for Indian children, schools, and realities.
              </p>

              {/* Feature list with enhanced interactions */}
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "UK-based curriculum standards", delay: "0.3s" },
                  { icon: MapPin, text: "India-focused implementation", delay: "0.4s" },
                  { icon: BookOpen, text: "Built with real schools in mind", delay: "0.5s" }
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-3 text-gray-700 group/item animate-slide-up"
                      style={{ opacity: 0, animationFillMode: "forwards", animationDelay: item.delay }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-primary-600 transition-all duration-300">
                          <ItemIcon className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" />
                        </div>
                      </div>
                      <p className="text-lg pt-2 group-hover/item:text-dark-900 group-hover/item:font-medium transition-all">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Enhanced Card */}
            <div 
              className="animate-slide-up group"
              style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <div className="relative">
                {/* Hover glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/10 to-dark-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Main card */}
                <div className="relative card p-8 md:p-10 bg-gradient-to-br from-primary-50 via-white to-dark-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Icon with enhanced depth */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      {/* Glow rings */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-50" />
                      
                      {/* Icon container */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>

                      {/* Orbiting dots */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-dark-700 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="text-center space-y-4">
                    <p className="text-xl md:text-2xl font-bold text-dark-900 leading-relaxed">
                      This is not theory for files.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/30 rounded-full" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary/30 rounded-full" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold gradient-text leading-relaxed">
                      This is practice for classrooms.
                    </p>
                  </div>

                  {/* Decorative bottom border */}
                  <div className="mt-8 flex justify-center gap-2">
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary-600 group-hover:w-24 transition-all duration-500" />
                    <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-600 to-dark-700 opacity-50 group-hover:w-12 transition-all duration-500" />
                    <div className="w-4 h-1 rounded-full bg-dark-700 opacity-30 group-hover:w-6 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExposure;
