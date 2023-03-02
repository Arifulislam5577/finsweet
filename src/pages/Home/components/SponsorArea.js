import React from "react";

const SponsorArea = () => {
  return (
    <div className="sponsor-area py-5 lg:py-10">
      <div className="container">
        <div className="flex lg:items-center items-start justify-between lg:flex-row flex-col gap-5 lg:gap-0">
          <h2 className="text-2xl font-semibold tracking-tight">
            Podcast Available On
          </h2>
          <div className="logos grid grid-cols-2 lg:grid-cols-4 items-center  justify-between gap-5">
            <div className="col-span-1 flex items-center justify-end">
              <img
                src="/images/logos/apple.svg"
                alt="apple podcast"
                className="h-9"
              />
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <img
                src="/images/logos/google.svg"
                alt="google podcast"
                className="h-9"
              />
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <img
                src="/images/logos/sound.svg"
                alt="sound podcast"
                className="h-9"
              />
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <img
                src="/images/logos/spotify.svg"
                alt="spotify podcast"
                className="h-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorArea;
