import React from "react";

const EpisodeArea = () => {
  return (
    <div className="episode-area py-5">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-bold text-3xl text-black mb-3">
              Recent Episodes
            </h2>
            <p className="text-base font-normal text-black max-w-md">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>

          <button className="bg-blue hover:bg-deepBlue duration-200 transition-all py-3 px-6 text-white font-medium text-base">
            See All Episodes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeArea;
