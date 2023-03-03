import React from "react";

const SponsorArea = () => {
  return (
    <div className="translate-y-20">
      <div className="container">
        <div className="p-10 bg-blue">
          <h2 className="font-bold text-3xl text-white md:text-center text-left mb-8 py-2">
            Our Sponsors
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5  items-center justify-between gap-5">
            <img
              src="/images/logos/logo4.svg"
              alt="Logo"
              className="md:h-9 h-7"
            />
            <img
              src="/images/logos/logo5.svg"
              alt="Logo"
              className="md:h-9 h-7"
            />
            <img
              src="/images/logos/logo3.svg"
              alt="Logo"
              className="md:h-9 h-7"
            />
            <img
              src="/images/logos/logo2.svg"
              alt="Logo"
              className="md:h-9 h-7"
            />
            <img
              src="/images/logos/logo1.svg"
              alt="Logo"
              className="md:h-9 h-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorArea;
