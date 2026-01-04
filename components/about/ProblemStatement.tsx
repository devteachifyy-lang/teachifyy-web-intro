"use client";

import { XCircle, TrendingDown, FileQuestion, AlertCircle } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: XCircle,
      title: "Teachers complete courses, but schools still hesitate to trust them",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary",
      delay: "0.1s"
    },
    {
      icon: TrendingDown,
      title: "Many teachers stay in the same role and salary for years",
      gradient: "from-dark-100/20 to-dark-100/10",
      iconColor: "text-dark-700",
      delay: "0.2s"
    },
    {
      icon: FileQuestion,
      title: "Certificates exist — clear growth paths don't",
      gradient: "from-primary/10 to-dark-100/10",
      iconColor: "text-primary",
      delay: "0.3s"
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      
      {/* Soft gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dark-100/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom relative">
        {/* Section Header with breathing space */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Pre-headline indicator */}
          <div 
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            <AlertCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">The Reality</span>
          </div>

          {/* Main heading with emphasis */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight animate-slide-up"
            style={{ 
              animationDelay: "0.2s", 
              opacity: 0, 
              animationFillMode: "forwards",
              letterSpacing: "-0.01em"
            }}
          >
            <span className="text-dark-900">Why most teacher diplomas</span>
            <br />
            <span className="text-dark-900">don't{" "}</span>
            <span className="relative inline-block">
              <span className="gradient-text relative z-10">change careers</span>
              {/* Subtle underline */}
              <span 
                className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"
                style={{
                  animation: "expandWidth 0.6s ease-out 0.6s forwards",
                  transform: "scaleX(0)",
                  transformOrigin: "left"
                }}
              />
            </span>
          </h2>

          {/* Supporting subtext */}
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            Despite efforts and qualifications, these patterns persist across the sector
          </p>
        </div>

        {/* Problem Cards - Enhanced with layering */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ 
                  animationDelay: problem.delay, 
                  opacity: 0, 
                  animationFillMode: "forwards" 
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Main card */}
                <div className="relative card p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                  {/* Icon container with depth */}
                  <div className="relative mb-6">
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-2xl blur-md opacity-60`} />
                    
                    {/* Icon circle */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${problem.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className={`w-8 h-8 ${problem.iconColor}`} />
                    </div>
                  </div>

                  {/* Problem description */}
                  <p className="text-lg text-gray-700 leading-relaxed font-medium flex-1">
                    {problem.title}
                  </p>

                  {/* Decorative dot indicator */}
                  <div className="mt-6 flex items-center justify-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${problem.gradient.replace('/10', '/40').replace('/5', '/30')} group-hover:scale-150 transition-transform duration-300`} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${problem.gradient.replace('/10', '/30').replace('/5', '/20')} group-hover:scale-125 transition-transform duration-300 delay-75`} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${problem.gradient.replace('/10', '/20').replace('/5', '/10')} group-hover:scale-110 transition-transform duration-300 delay-100`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom insight - Emotional connector */}
        <div 
          className="max-w-3xl mx-auto mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative inline-block">
            {/* Soft background glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl blur-xl" />
            
            <p className="relative text-xl md:text-2xl font-semibold text-dark-900 px-8 py-4">
              You deserve a path that actually leads somewhere.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes expandWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemStatement;
