"use client";

import { GraduationCap, RefreshCw, BookMarked, TrendingUp, Users } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "New graduates entering teaching",
      gradient: "from-primary to-primary-600",
      bgGradient: "from-primary/10 to-primary/5",
      delay: "0.2s"
    },
    {
      icon: RefreshCw,
      title: "Career-gap professionals returning to work",
      gradient: "from-dark-700 to-dark-900",
      bgGradient: "from-dark-100/20 to-dark-100/10",
      delay: "0.3s"
    },
    {
      icon: BookMarked,
      title: "B.Ed holders who feel underprepared",
      gradient: "from-primary-600 to-primary-700",
      bgGradient: "from-primary/10 to-primary/5",
      delay: "0.4s"
    },
    {
      icon: TrendingUp,
      title: "Teachers who want stability and growth",
      gradient: "from-dark-600 to-primary",
      bgGradient: "from-dark-100/10 to-primary/5",
      delay: "0.5s"
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-50/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,72,98,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(31,72,98,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">For You</span>
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
            <span className="text-dark-900">Who Teachifyy is </span>
            <span className="gradient-text">built for</span>
          </h2>

          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            If you see yourself here, this program is designed for your journey
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ 
                  animationDelay: audience.delay, 
                  opacity: 0, 
                  animationFillMode: "forwards" 
                }}
              >
                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${audience.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg`} />
                
                {/* Main card */}
                <div className="relative card p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-4">
                    {/* Enhanced Icon */}
                    <div className="relative flex-shrink-0">
                      {/* Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                      
                      {/* Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${audience.bgGradient} rounded-xl`} />
                      
                      {/* Icon container */}
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${audience.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Pulse dot */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed group-hover:text-dark-900 transition-colors">
                        {audience.title}
                      </p>

                      {/* Animated underline */}
                      <div className="mt-3 flex items-center gap-1">
                        <div className={`h-0.5 rounded-full bg-gradient-to-r ${audience.gradient} transition-all duration-500 w-0 group-hover:w-12`} />
                        <div className={`h-0.5 rounded-full bg-gradient-to-r ${audience.gradient} opacity-50 transition-all duration-500 delay-75 w-0 group-hover:w-6`} />
                        <div className={`h-0.5 rounded-full bg-gradient-to-r ${audience.gradient} opacity-30 transition-all duration-500 delay-100 w-0 group-hover:w-3`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div 
          className="max-w-3xl mx-auto mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative inline-block px-8 py-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl blur-xl" />
            <p className="relative text-xl md:text-2xl font-semibold text-dark-900">
              Your background does not limit you. <span className="gradient-text">Your next step defines you.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
