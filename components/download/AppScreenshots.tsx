import Image from 'next/image';

const screenshots = [
  { src: '/assets/1.png', alt: 'App Screenshot - Dashboard' },
  { src: '/assets/2.png', alt: 'App Screenshot - Course View' },
  { src: '/assets/3.png', alt: 'App Screenshot - Progress Tracking' },
];

export default function AppScreenshots() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Your Learning Experience on Mobile
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            A thoughtfully designed app that makes professional development feel effortless.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.alt}
              className={`relative ${
                index === 1
                  ? 'w-[220px] md:w-[270px]'
                  : 'w-[190px] md:w-[230px]'
              }`}
              style={{ marginTop: index === 1 ? '0px' : '32px' }}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={270}
                height={550}
                className="object-contain drop-shadow-xl rounded-[28px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
