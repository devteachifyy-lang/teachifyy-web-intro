"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import CtaSection from "@/components/home/CtaSection";

// Static course data (will be replaced with API later)
const courseData = {
  success: true,
  data: {
    courseId: "ECE-001",
    slug: "diploma-in-early-childhood-education",

    course: {
      title: "Diploma in Early Childhood Education",
      description:
        "Master the art of early education with our UK-standard curriculum.Designed for educators seeking global academic credibility and practical classroom excellence.",
      image: "/assets/courseThumb.jpeg",
    },

    aboutCourse: {
      description: [
        "Prior to its development, extensive market research was conducted with 1000+ teachers and preschool owners.",
        "The program integrates inclusive pedagogy, play-based experiential learning, neuroplasticity principles, and AI-enabled technology.",
        "Designed for global markets and contemporary preschool models.",
      ],
    },

    whatYouWillLearn: {
      title: "What You'll Learn",
      points: [
        "Apply global teaching methods in modern classrooms.",
        "Understand child development and emotional well-being.",
        "Create inclusive and engaging learning environments.",
        "Communicate effectively with parents and lead responsibly.",
        "Plan and manage a successful preschool.",
      ],
    },

    curriculum: {
      totalLevels: 3,
      totalWeeks: 24,
      levels: [
        {
          levelId: "L1",
          title: "Level 1 – Foundations",
          topics: [
            "Child development, psychology & health fundamentals",
            "Play-based, inclusive & trauma-informed teaching",
            "Curriculum design, literacy & numeracy basics",
            "Classroom management & safeguarding practices",
            "Child rights & parent partnership skills",
            "Ethics & professional teaching foundations",
          ],
        },
        {
          levelId: "L2",
          title: "Level 2 – Global & Advanced Practice",
          topics: [
            "Advanced pedagogy models",
            "Global preschool frameworks",
            "Assessment & observation techniques",
            "Technology in early education",
          ],
        },
        {
          levelId: "L3",
          title: "Level 3 – Leadership & Entrepreneurship",
          topics: [
            "Preschool business setup",
            "Financial planning & budgeting",
            "Marketing & admissions strategy",
            "Team leadership & operations",
          ],
        },
      ],
    },

    pricing: {
      currency: "INR",
      originalPrice: 99900,
    },

    mentor: {
      name: "Ms. Sohini Mondal",
      designation: "Early Childhood Education Specialist",
      image: "/assets/courseThumb.jpeg",
      bio: "With over 7 years of teaching and tutoring experience, she has worked with children from varied communities and across ICSE schools.",
    },
  },
};

export default function CoursePage() {
  const { data } = courseData;
  const [openLevel, setOpenLevel] = useState<string | null>(
    data.curriculum.levels[0]?.levelId || null
  );

  const toggleLevel = (levelId: string) => {
    setOpenLevel((prev) => (prev === levelId ? null : levelId));
  };

  const formattedPrice = new Intl.NumberFormat("en-IN").format(
    data.pricing.originalPrice
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative overflow-hidden">
        {/* Subtle decorative blob */}
        {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" /> */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
        </div>
        <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left – Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#000000] leading-tight tracking-tight mb-5">
                {data.course.title}
              </h1>
              <p className="text-[#000000]/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                {data.course.description}
              </p>

              {/* <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <button className="bg-primary hover:bg-primary-600 text-white font-semibold text-[15px] px-8 py-3 rounded-lg transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto">
                    Enroll Now
                  </button>
                </Link>
                <button className="border-2 border-white/30 text-white font-medium text-[15px] px-8 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                  Explore Curriculum
                </button>
              </div> */}
            </div>

            {/* Right – Image */}
            <div className="flex-shrink-0 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src={data.course.image}
                  alt={data.course.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== ABOUT + PRICING SECTION ======================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Left Column – About + What You'll Learn */}
            <div className="flex-1 min-w-0">
              {/* About This Course */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  About This Course
                </h2>
                <div className="space-y-4">
                  {data.aboutCourse.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-[15px] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  {data.whatYouWillLearn.title}
                </h2>
                <ul className="space-y-3">
                  {data.whatYouWillLearn.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-[15px] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column – Pricing Card */}
            <div className="w-full lg:w-[340px] xl:w-[370px] shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/60 p-6">
                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold text-gray-900">
                        ₹{formattedPrice}
                      </span>
                      {/* If there's a strikethrough price, show it */}
                      {/* <span className="text-lg text-gray-400 line-through">₹1,29,900</span> */}
                    </div>
                  </div>

                  <hr className="border-gray-100 mb-5" />

                  {/* Feature List */}
                  <ul className="space-y-3 mb-6">
                    {[
                      "24 Weeks Program",
                      "3 Levels Covered",
                      "Live Mentorship",
                      "Certificate of Completion",
                      "Job Assistance",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Enroll CTA */}
                  <Link href="/contact" className="block mb-3">
                    <button className="w-full bg-primary hover:bg-primary-600 text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors shadow-md shadow-primary/20">
                      Enroll Now
                    </button>
                  </Link>

                  {/* Secondary Links */}
                  <div className="text-center space-y-2 pt-2">
                    <Link
                      href="/contact"
                      className="block text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      Talk to a Counsellor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CURRICULUM SECTION ======================== */}
      <section className="section-padding bg-gray-50/60">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Course Curriculum
          </h2>

          <div className="space-y-3 max-w-3xl">
            {data.curriculum.levels.map((level) => {
              const isOpen = openLevel === level.levelId;
              return (
                <div
                  key={level.levelId}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleLevel(level.levelId)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none group"
                  >
                    <span className="font-semibold text-gray-900 text-[15px] md:text-base group-hover:text-primary transition-colors">
                      {level.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <ul className="space-y-2.5 border-t border-gray-100 pt-4">
                        {level.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================== MENTOR SECTION ======================== */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Your Mentor
          </h2>

          <div className="flex flex-col sm:flex-row items-start gap-5 max-w-2xl">
            {/* Mentor Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 border-2 border-gray-100 relative">
              <Image
                src={data.mentor.image}
                alt={data.mentor.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Mentor Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">
                {data.mentor.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {data.mentor.designation}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {data.mentor.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CTA SECTION ======================== */}
      <CtaSection />
    </div>
  );
}
