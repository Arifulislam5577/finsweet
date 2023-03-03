import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { coverPhoto, title, description } = blog;
  return (
    <div className="md:col-span-1 w-full">
      <div className="blog-post">
        <div>
          <img src={coverPhoto} alt={title} className="h-full w-full" />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-black ">{title}</h3>
          <p className="text-base font-normal text-black">{description}</p>

          <Link
            to="/"
            className="flex items-center text-blue gap-2 text-base font-semibold hover:text-deepBlue duration-200 transition-all"
          >
            <span className="">Read Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
