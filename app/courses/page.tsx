import { Metadata } from "next";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { constructMetadata } from "@/lib/metadata";
import CourseHero from "@/components/courses/CourseHero";
import UserJourney from "@/components/courses/UserJourney";
import UpcomingMasterclasses from "@/components/courses/UpcomingMasterclasses";

export const metadata: Metadata = constructMetadata({
  title: "Courses",
  description:
    "Browse our comprehensive collection of web development courses. Learn React, Next.js, TypeScript, and more.",
});

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CourseHero />
      <UserJourney />
      <UpcomingMasterclasses />

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Explore <span className="text-primary">Our Courses</span>
            </h2>
            <p className="text-gray-600 font-medium">
              Comprehensive courses tailored for every career stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} className="shadow-sm border border-gray-100" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
