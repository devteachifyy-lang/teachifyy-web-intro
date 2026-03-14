"use client";

import { BookOpen, Layers, Video, Cpu, Search, Users } from 'lucide-react';

const roles = [
  {
    icon: BookOpen,
    title: 'Educators & Teacher Trainers',
    highlighted: true,
  },
  {
    icon: Layers,
    title: 'Curriculum Designers',
    highlighted: true,
  },
  {
    icon: Video,
    title: 'Video Creators & Storytellers',
    highlighted: true,
  },
  {
    icon: Cpu,
    title: 'Designers & Product Thinkers',
    highlighted: true,
  },
  {
    icon: Search,
    title: 'Education Researchers',
    highlighted: true,
  },
  {
    icon: Users,
    title: 'Community Builders',
    highlighted: true,
  },
];

export default function WhoCanReachOut() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Who Can Reach Out
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            We are open to talented people from many backgrounds. Here are some
            of the profiles we are always excited to hear from when considering
            filling positions on our team.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className={`flex items-center gap-3 rounded-xl border px-5 py-4 transition-all duration-200 hover:shadow-md cursor-pointer ${role.highlighted
                  ? 'border-[#ff4d67] bg-white'
                  : 'border-slate-200 bg-white'
                  }`}
              >
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full shrink-0 ${role.highlighted
                    ? 'bg-[#fff0f2]'
                    : 'bg-slate-100'
                    }`}
                >
                  <Icon
                    className={`w-4 h-4 ${role.highlighted ? 'text-[#ff4d67]' : 'text-slate-500'
                      }`}
                    strokeWidth={1.8}
                  />
                </div>
                <span className="text-slate-800 text-[14px] font-medium leading-snug">
                  {role.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 text-[14px] mt-10 max-w-xl mx-auto leading-relaxed">
          Don&apos;t see yourself here? That&apos;s okay if you&apos;re passionate about education and want to contribute, we still want to hear your story.
        </p>
      </div>
    </section>
  );
}
