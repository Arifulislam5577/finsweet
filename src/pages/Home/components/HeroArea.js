import React from "react";

const HeroArea = () => {
  return (
    <div className="hero-area lg:py-20 py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-5">
          <div className="lg:col-span-1 w-full text-left  flex flex-col items-start gap-5 lg:p-10 p-5 order-2 lg:order-1">
            <h1 className="font-bold lg:text-5xl text-3xl text-black">
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
                <button className="lg:w-1/4 w-2/4 block py-3  bg-blue text-white px-6 text-sm lg:text-base">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-1 w-full flex items-center justify-center p-10 order-1 lg:order-2">
            <img src="/images/hero.svg" alt="hero" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
