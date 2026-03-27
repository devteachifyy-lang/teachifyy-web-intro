import Image from 'next/image';

export default function AppScreenshots() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-white">
      {/* Background soft glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        {/* Chip */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center  bg-[#DDE6F2] text-[11px] uppercase rounded-full px-4 py-1.5 shadow-sm">
            APP PREVIEW
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Your Learning Experience on Mobile
          </h2>
          <p className="text-slate-500  mx-auto leading-relaxed text-sm md:text-base">
            A thoughtfully designed app that makes professional development feel effortless.
          </p>
        </div>

        {/* Single Full-Width Image */}
        <div className="w-full max-w-5xl mx-auto ">
          <Image
            src="/assets/Mobiless.png"
            alt="Teachifyy Mobile App Screenshots"
            width={1200}
            height={700}
            className="w-full h-auto object-contain rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
