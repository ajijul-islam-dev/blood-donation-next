import React from "react";
import VideoIntro from "./VideoIntro";

const Introduction = () => {
  return (
    <div className="bg-white py-20 md:py-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="relative">
          <div className="w-full h-full bg-[#F9FAFB] p-5 md:p-10 space-y-3 md:space-y-5 text-[#333333] md:absolute -bottom-12 -right-20 rounded-md hover:shadow-xl z-10 duration-300 ">
            <h1 className="intro-title text-4xl font-semibold mb-10">
              Who We Are?
            </h1>
            <p className="">
              Blood Buddies is for public donation center with blood donation
              members in the changing health care system.
            </p>
            <ul className="space-y-3 list-disc pl-5 md:pl-8">
              <li>Specialist blood donors and clinical supervision.</li>
              <li>Increasing communication with our members.</li>
              <li>High quality assessment, diagnosis and treatment.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>The extra care of a multi-disciplinary team.</li>
            </ul>
          </div>
        </div>
        <div className="">
          <VideoIntro />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
