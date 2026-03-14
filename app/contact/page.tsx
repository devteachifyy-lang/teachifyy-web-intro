import { Metadata } from 'next';
import Image from 'next/image';
import ContactFaq from '@/components/contact/ContactFaq';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with us. We\'re here to help with any questions about our courses and programs.',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="md:pt-16 pt-5  pb-16 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#DDE6F2] text-black text-xs  tracking-widest uppercase rounded-full">
                DEDICATED SUPPORT TEAM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-tight text-[#1a202c] tracking-tight">
                We&apos;re Here to<br />
                Support Your<br />
                Teaching Journey
              </h1>
              <p className="text-base text-zinc-600 max-w-md font-normal leading-relaxed">
                Whether you have questions about our programs, career opportunities, or admissions, our team is here to guide you
              </p>
            </div>

            {/* Right Image */}
            <div className="relative rounded-[2rem] overflow-hidden h-[300px] lg:h-[380px] w-full max-w-lg mx-auto lg:ml-auto shadow-2xl">
              <Image
                src="/assets/contactUsHero.jpg"
                alt="Teacher on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empty Form Section with Gradient Background */}
      <section className="relative py-28 min-h-[600px] bg-gradient-to-tr from-[#ffebe6] via-white to-[#e6f0ff]">
        <div className="container-custom relative z-10 flex justify-center">
          {/* Empty White Card representing the form container */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-3xl min-h-[600px]">
            {/* Form placeholder - form fields will go here eventually */}
          </div>
        </div>
      </section>

      {/* Program Selection CTA */}
      <section className="bg-[#0E172B] py-24 text-center ">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Not Sure Which Program is <span className="text-[#FF4667]">Right for You?</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-light">
            Our advisors can help you understand your career goals and guide you toward the right learning path for your professional growth.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-base max-w-2xl mx-auto">
              Find answers to some of the most frequent inquiries from our community.
            </p>
          </div>

          <ContactFaq />
        </div>
      </section>
    </div>
  );
}
