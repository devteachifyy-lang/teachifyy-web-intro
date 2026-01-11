"use client";

import { Compass, Building2, Target, Lightbulb } from "lucide-react";

const WhyTeachifyy = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-100/10 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Message - Enhanced Typography */}
          <div className="text-center mb-16">
            {/* Pre-headline */}
            <div 
              className="inline-flex items-center gap-2 mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
            >
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">The Core Issue</span>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight animate-slide-up"
              style={{ 
                animationDelay: "0.2s", 
                opacity: 0, 
                animationFillMode: "forwards",
                letterSpacing: "-0.01em"
              }}
            >
              <span className="text-dark-900">The problem does not </span>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">effort</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/10 -rotate-1" />
              </span>
              <span className="text-dark-900">.</span>
              <br />
              <span className="text-dark-900">It does not </span>
              <span className="relative inline-block">
                <span className="gradient-text relative z-10">direction</span>
                <span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full"
                  style={{
                    animation: "expandWidth 0.6s ease-out 0.8s forwards",
                    transform: "scaleX(0)",
                    transformOrigin: "left"
                  }}
                />
              </span>
              <span className="gradient-text">.</span>
            </h2>
          </div>

          {/* Why Teachifyy was built - Enhanced Card */}
          <div 
            className="relative group animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-dark-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative card p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-8">
                {/* Enhanced Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-xl blur-md opacity-40" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Compass className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-dark-900">
                    Why Teachifyy was built
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </div>
              </div>

              <div className="space-y-5 text-gray-700 text-lg leading-relaxed ml-0 md:ml-16">
                {[
                  { icon: Building2, text: "India`s preschool sector is large, fragmented, and unregulated." },
                  { icon: Target, text: "Schools struggle to hire classroom-ready teachers." },
                  { icon: Target, text: "Teachers struggle to find a recognised, practical pathway they can trust." }
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group/item"
                      style={{
                        animation: "slideIn 0.5s ease-out forwards",
                        animationDelay: `${0.6 + index * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <ItemIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="pt-2">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Highlight Box */}
              <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-primary/5 via-primary/3 to-dark-100/5 rounded-2xl border-l-4 border-primary ml-0 md:ml-16 relative overflow-hidden group/box">
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-700" 
                  style={{ animation: "shimmer 3s infinite" }}
                />
                
                <div className="relative">
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    Teachifyy was built after reviewing <span className="font-semibold text-dark-900">thousands of teacher applications</span> — qualified on paper, unprepared in practice.
                  </p>
                  <p className="text-dark-900 font-bold text-xl flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    This diploma exists to close that gap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default WhyTeachifyy;
