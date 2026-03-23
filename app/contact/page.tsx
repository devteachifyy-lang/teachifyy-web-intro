import { Metadata } from 'next';
import Image from 'next/image';
import ContactFaq from '@/components/contact/ContactFaq';
import { Mail, Phone, MapPin, Linkedin, ChartNoAxesCombined } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with us. We\'re here to help with any questions about our courses and programs.',
});

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Support@teachifyy.com',
      href: 'mailto:Support@teachifyy.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7877447884 | +91 6291507718',
      href: 'tel:+917877447884',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur | Delhi | Kolkata',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/teachifyy/', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION (MATCHED WITH MAIN HERO) */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-10 lg:py-12">

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-center">

              {/* LEFT */}
              <div className="flex flex-col items-start text-left">

                {/* Badge */}
                <div className="inline-flex items-center bg-[#DDE6F2] text-black text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full px-4 sm:px-6 py-1.5 mb-5">
                  DEDICATED SUPPORT TEAM
                </div>

                {/* Heading */}
                <h1 className="text-[#1a202c] 
                  text-[28px] 
                  sm:text-[34px] 
                  md:text-[40px] 
                  lg:text-[44px] 
                  leading-tight 
                  mb-4 
                  font-medium">
                  We&apos;re Here to <br className="hidden sm:block" />
                  Support Your <br />
                  Journey
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-600 
                  text-[13px] 
                  sm:text-[14px] 
                  md:text-[16px] 
                  mb-6 
                  max-w-full 
                  lg:max-w-[540px]">
                  Whether you have questions about our programs, career opportunities, or admissions, our team is here to guide you
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-full max-w-[580px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-[4/3] 
                  rounded-[24px] 
                  sm:rounded-[32px] 
                  lg:rounded-l-[76px] 
                  lg:rounded-r-[76px] 
                  overflow-hidden">
                  <Image
                    src="/assets/contactUsHero.jpg"
                    alt="Teacher on laptop"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute 
                  bottom-[-20px] 
                  sm:bottom-4 
                  left-1/2 
                  -translate-x-1/2 
                  lg:left-[-20px] 
                  lg:translate-x-0 
                  bg-white rounded-xl sm:rounded-2xl 
                  px-4 py-3 
                  shadow-lg 
                  flex items-center gap-3 
                  max-w-[200px]">
                  <div className="w-3 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-bold text-[13px]">LIVE NOW</p>
                    <p className="text-[11px] text-gray-500">
                      Advisors are currently online and ready to help.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* REST CODE (UNCHANGED) */}
      <section className="relative py-28 bg-gradient-to-tr from-[#ffebe6] via-white to-[#e6f0ff]">
        <div className="container-custom relative z-10 flex justify-center">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-5xl min-h-[600px] overflow-hidden flex flex-col md:flex-row">

            <div className="bg-[#0E172B] text-white p-10 md:p-14 w-full flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex-grow max-w-2xl mx-auto w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white ">Contact Information</h3>

                <div className="space-y-8 md:space-y-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <info.icon className="w-5 h-5 text-[#FF4667] shrink-0 mt-1" strokeWidth={2} />
                      <div className="space-y-1 border-b border-white/10 pb-4 w-full">
                        <h4 className="text-sm text-zinc-400 font-medium tracking-wide uppercase">{info.title}</h4>
                        <div className="text-base md:text-[17px] font-medium">
                          {info.href ? (
                            <a href={info.href} className="hover:text-[#FF4667] transition-colors">{info.value}</a>
                          ) : (
                            <span>{info.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-12 flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4667] transition-all">
                      <social.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF4667]/20 rounded-full blur-3xl"></div>
              <div className="absolute top-12 -right-12 w-32 h-32 bg-[#FF4667]/10 rounded-full blur-2xl"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0E172B] py-24 text-center">
        <div className="container-custom  mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Not Sure Which Program is <span className="text-[#FF4667]">Right for You?</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-light max-w-3xl mx-auto">
            Our advisors can help you understand your career goals and guide you toward the right learning path for your professional growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-base max-w-2xl mx-auto">
              Find answers to common questions.
            </p>
          </div>

          <ContactFaq />
        </div>
      </section>
    </div>
  );
}