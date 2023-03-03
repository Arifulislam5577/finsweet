import React from "react";
import { Link } from "react-router-dom";

const Podcast = ({ podcast }) => {
  const { coverPhoto, title, description } = podcast;
  return (
    <div className="lg:col-span-1 w-full">
      <div className="podcast-episode">
        <div className="relative z-0">
          <img src={coverPhoto} alt={title} className="h-full w-full" />
          <button className="absolute top-5 right-5 z-10 h-10 w-10 bg-blue flex items-center justify-center rounded-full duration-200 transition-all hover:bg-deepBlue">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7V8C13.998 9.68185 13.3906 11.3068 12.2888 12.5775C11.187 13.8482 9.6646 14.6797 8 14.92V18H11V20H3V18H6V14.92C4.3354 14.6797 2.81295 13.8482 1.71118 12.5775C0.609407 11.3068 0.00197111 9.68185 0 8V7H2V8C2 9.32608 2.52678 10.5979 3.46447 11.5355C4.40215 12.4732 5.67392 13 7 13C8.32608 13 9.59785 12.4732 10.5355 11.5355C11.4732 10.5979 12 9.32608 12 8V7H14ZM7 11C7.79565 11 8.55871 10.6839 9.12132 10.1213C9.68393 9.55871 10 8.79565 10 8V3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V8C4 8.79565 4.31607 9.55871 4.87868 10.1213C5.44129 10.6839 6.20435 11 7 11Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-black ">{title}</h3>

          <p className="text-base font-normal text-black">{description}</p>

          <Link
            to="/"
            className="flex items-center text-blue gap-2 text-base font-semibold hover:text-deepBlue duration-200 transition-all"
          >
            <span className="bg-current p-3 h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex items-center justify-center text-center scale-125"
              >
                <path
                  d="M9.33334 5.99996L0.444456 11.6452L0.444456 0.354761L9.33334 5.99996Z"
                  fill="white"
                />
              </svg>
            </span>

            <span className="">Listen Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
