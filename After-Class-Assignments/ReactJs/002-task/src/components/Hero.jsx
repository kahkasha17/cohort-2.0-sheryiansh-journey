import React from "react";

const Hero = () => {
  return (
    <div className="my-2 mx-5 hero-section bg-[url('/hero.png')] h-screen border-transparent rounded bg-cover bg-center bg-no-repeat  flex flex-col justify-center gap-4 px-2 md:px-8 py-2">
      <h1 className="uppercase text-5xl font-bold md:text-8xl md:w-2xl ">desing & freedom </h1>
      <div className="hero-content flex flex-col gap-4">
        <p className="md:font-bold">
          Explore the independent style by embracing uniqueness with our
          exclusive designer apparel
        </p>
        <div className="learnmore flex gap-4">
          <i className="ri-arrow-down-long-line px-2 py-1 border border-white rounded-4xl bg-[#1E1E1E] font-extrabold "></i>
          <button className="uppercase ">Learn more </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
