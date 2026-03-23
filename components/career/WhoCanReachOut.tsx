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
            We&apos;re not just looking for job candidates — we&apos;re looking for collaborators, thinkers, and people who care deeply about education.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto my-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="flex items-center gap-5 bg-white border-l-[4px] border-[#FF4667] rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#f8fafc] shrink-0 border border-slate-100">
                  <Icon className="w-[20px] h-[20px] text-[#334155]" strokeWidth={1.5} />
                </div>
                <span className="text-[#111827] text-[15px] font-bold leading-tight">
                  {role.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 text-[14px] mt-10 max-w-xl mx-auto leading-relaxed">
          Don&apos;t see yourself here? That&apos;s okay — if you&apos;re passionate about education and want to contribute, we still want to hear your story.</p>
      </div>
    </section>
  );
}
