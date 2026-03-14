import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareerHero() {
  return (
    <section className="relative w-full overflow-hidden py-5 md:py-16">
      {/* Background soft glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 shadow-sm mb-6">
              <span className="text-xs font-semibold text-slate-700 tracking-widest uppercase">WORK WITH US</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 leading-[1.15]">
              Build the{' '}
              <span className="text-[#FF4667]">Future</span>
              <br />
              of{' '}
              <span className="text-[#FF4667]">Education</span>
            </h1>

            {/* Subtext */}
            <p className="text-black mb-8 max-w-md leading-relaxed text-lg">
              At Teachifyy, we are building meaningful learning experiences for educators. Join our mission to empower teachers and transform classrooms.
            </p>
            <p className=" text-slate-600 mb-2 max-w-md leading-relaxed text-sm">
              Even if there are no open roles, we are always excited to connect with passionate people.
            </p>
            {/* CTA Button */}
            <Link
              href="#opportunities"
              className="inline-flex items-center gap-2 bg-[#ff4d67] text-white font-medium text-[15px] pt-[12px] pb-[12px] px-[24px] hover:bg-[#ff3b57] transition-all rounded-full"
            >
              Send us a message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto md:ml-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/careerHero.jpg"
              alt="Build the Future of Education"
              fill
              className="object-cover"
              priority
            />
            {/* Stats badge overlay */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ff4d67]/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff4d67" stroke="#ff4d67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Our Mission</p>
                <p className="text-sm font-bold text-slate-800">Educators First Always</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
