import React from "react";
import Blog from "../../../components/common/Blog";
import { blogs } from "../../../data/podcast";

const BlogArea = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch justify-between">
          <div className="lg:col-span-1 w-full bg-lightGray flex flex-col justify-between">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-black mb-3">
                Read our <br /> articles & news
              </h1>

              <button className="text-base text-blue capitalize font-semibold hover:text-deepBlue duration-200 transition-all">
                see more
              </button>
            </div>
            <img
              src="/images/Shapes.svg"
              alt="spapes"
              className="h-full w-full"
            />
          </div>

          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
