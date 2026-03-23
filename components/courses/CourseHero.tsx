import React from "react";

const CourseHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-20">
      {/* Background Layer with subtle peach and light blue glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Your Journey to <span className="text-[#FE4464] font-bold">Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mx-auto ">
          Carefully curated paths designed to take your teaching career to the next level.
        </p>
      </div>
    </section>
  );
};

export default CourseHero;
