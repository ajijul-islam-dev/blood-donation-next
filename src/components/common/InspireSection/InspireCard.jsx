"use client";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import React, { useState } from "react";

const InspireCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative z-50"
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 bg-white relative">
        <div className=" overflow-hidden">
          <Image
            className={`${
              isHovered ? "scale-110" : ""
            } transition-all overflow-hidden duration-500 w-full object-cover`}
            src="/assets/images/Inspiration/donor.png"
            width={500}
            height={500}
            alt="Inspire"
          />{" "}
          <Image
            className={`${
              isHovered ? "bg-primary" : "bg-black"
            }  w-24 transition-colors duration-500 h-24 p-4 px-6 absolute left-0 right-0 mx-auto -bottom-5`}
            src="/assets/images/Inspiration/icons/first-aid.png"
            width={100}
            height={100}
            alt="Inspire"
          />
        </div>
      </div>
      <div className="text-center bg-white p-5 space-y-5 pt-8">
        <h2 className="text-2xl">Become a Donor</h2>
        <p className="text-base">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give pleasure
        </p>
      </div>
      <div className="w-full">
        <ShinyButton
          className={`${
            isHovered ? "bg-primary" : "bg-black"
          } transition-colors duration-500 text-white w-full rounded-none p-5`}
        >
          <span className="text-white">Shiny Button</span>
        </ShinyButton>
      </div>
    </div>
  );
};

export default InspireCard;
