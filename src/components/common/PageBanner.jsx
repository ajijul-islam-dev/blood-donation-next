import React from "react";

const PageBanner = () => {
  return (
    <div className="h-72  bg-[url('/assets/images/cover.webp')]">
      <div className="bg-[rgba(0,0,0,0.7)] w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-center text-4xl">About Page</h1>
          <p className="text-sm">Home / AboutPage</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
