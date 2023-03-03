import React from "react";

const AboutHero = () => {
  return (
    <div className="hero-area py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-5">
          <div className="lg:col-span-1 w-full text-left  flex flex-col items-start gap-5 lg:p-10 p-5 order-2 lg:order-1">
            <h1 className="font-bold lg:text-5xl text-3xl text-black">
              About Finsweet Podcast
            </h1>
            <p className="font-normal text-base text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>

            <button className="bg-blue hover:bg-deepBlue duration-200 transition-all py-3 px-6 text-white font-medium text-base">
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
