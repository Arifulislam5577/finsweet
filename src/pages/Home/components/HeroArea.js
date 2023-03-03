import React from "react";

const HeroArea = () => {
  return (
    <div className="hero-area md:py-20 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5">
          <div className="md:col-span-1 w-full text-left  flex flex-col items-start gap-5 md:p-0 lg:p-10 p-5 order-2 md:order-1">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-black">
              Become The Hero Of Your Own Story
            </h1>
            <p className="font-normal text-base text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>

            <form className="w-full">
              <div className="w-full flex">
                <input
                  type="search"
                  placeholder="Enter Your Email Id"
                  className="bg-lightGray py-3 px-4 placeholder:text-gray focus:outline-none w-3/4 placeholder:lg:text-base placeholder:text-sm"
                />
                <button className="lg:w-1/4 w-2/4 block py-3  bg-blue hover:bg-deepBlue transition-all duration-200 text-white px-6 text-sm lg:text-base">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 w-full flex items-center justify-center p-5 md:p-0 lg:p-5 order-1 md:order-2">
            <img src="/images/hero.svg" alt="hero" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
