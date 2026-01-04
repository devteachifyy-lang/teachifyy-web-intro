"use client";

import { Briefcase, TrendingUp, Shield, Sparkles } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Job Readiness",
      description: "Practical classroom skills schools actually look for",
      gradient: "from-primary to-primary-600",
      bgGradient: "from-primary/10 to-primary/5",
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      title: "Career Mobility",
      description: "Skills that help you grow beyond your first role",
      gradient: "from-dark-700 to-dark-900",
      bgGradient: "from-dark-100/20 to-dark-100/10",
      delay: "0.3s"
    },
    {
      icon: Shield,
      title: "Professional Confidence",
      description: "So management, parents, and students take you seriously",
      gradient: "from-primary-600 to-dark-700",
      bgGradient: "from-primary/10 to-dark-100/10",
      delay: "0.4s"
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Our Approach</span>
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
            <span className="text-dark-900">What Teachifyy does </span>
            <span className="gradient-text">differently</span>
          </h2>

          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            Three pillars that transform teaching careers
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ 
                  animationDelay: pillar.delay, 
                  opacity: 0, 
                  animationFillMode: "forwards" 
                }}
              >
                {/* Hover glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${pillar.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg`} />
                
                {/* Main card */}
                <div className="relative card p-8 text-center bg-white h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Icon with enhanced depth */}
                  <div className="relative mx-auto mb-6">
                    {/* Glow ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Background ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} rounded-2xl opacity-50`} />
                    
                    {/* Icon container */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Floating particles on hover */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-dark-700 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: "0.2s" }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-900 group-hover:gradient-text transition-all duration-300">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg flex-1">
                    {pillar.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center justify-center gap-1.5">
                    <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} group-hover:w-12 transition-all duration-500`} />
                    <div className={`w-4 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-40 group-hover:opacity-70 transition-all duration-500`} />
                    <div className={`w-2 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-20 group-hover:opacity-50 transition-all duration-500`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom insight */}
        <div 
          className="max-w-3xl mx-auto mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative inline-block px-8 py-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl blur-xl" />
            <p className="relative text-xl md:text-2xl font-semibold text-dark-900">
              Not just knowledge. <span className="gradient-text">Capability that schools recognize.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
