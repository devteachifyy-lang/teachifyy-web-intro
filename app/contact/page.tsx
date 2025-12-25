import { Metadata } from 'next';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us - EduPro Academy',
  description: 'Get in touch with us. We\'re here to help with any questions about our courses and programs.',
});

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@.com',
      href: 'mailto:hello@edupro-academy.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+0 (000) 000-0000',
      href: 'tel:+0000000000',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <section className="section-padding bg-gradient-to-b from-dark to-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Have a question or want to learn more about our courses? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">
                Contact <span className="text-primary">Information</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-dark-50 border border-zinc-800 hover:border-primary/50 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400 mb-1">{info.title}</p>
                        <p className=" font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.title} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-zinc-800 hover:bg-primary hover:text-dark text-zinc-300 transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Office Hours */}
              {/* <div className="mt-8 p-6 rounded-xl bg-dark-50 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-12 md:py-16 bg-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'How long do I have access to the courses?',
                  a: 'You have lifetime access to all courses you purchase. Learn at your own pace!',
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course.',
                },
                {
                  q: 'Are there any prerequisites?',
                  a: 'Prerequisites vary by course. Check the course details page for specific requirements.',
                },
                {
                  q: 'Do you provide certificates?',
                  a: 'Yes, you\'ll receive a certificate of completion for each course you finish.',
                },
              ].map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
