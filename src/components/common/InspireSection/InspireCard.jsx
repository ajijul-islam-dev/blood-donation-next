"use client";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import React, { useState } from "react";

const InspireCard = ({ inspire }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative z-10"
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-white relative">
        <div className=" overflow-hidden">
          <Image
            className={`${
              isHovered ? "scale-125" : ""
            } transition-all overflow-hidden duration-500 w-full object-cover h-80`}
            src={inspire.image}
            width={500}
            height={500}
            alt="Inspire"
          />{" "}
          <Image
            className={`${
              isHovered ? "bg-primary" : "bg-black"
            }  w-20 transition-colors duration-500 h-20 p-4 px-6 absolute left-0 right-0 mx-auto -bottom-5`}
            src={inspire.icon}
            width={100}
            height={100}
            alt="Inspire"
          />
        </div>
      </div>
      <div className="text-center bg-white p-5 space-y-5 pt-8">
        <h2 className="text-2xl">{inspire.title}</h2>
        <p className="text-base">{inspire.description}</p>
      </div>
      <div className="w-full">
        <ShinyButton
          className={`${
            isHovered ? "bg-primary" : "bg-black"
          } transition-colors duration-500 text-white w-full rounded-none md:p-5`}
        >
          <span className="text-white">Read More</span>
        </ShinyButton>
      </div>
    </div>
  );
};

export default InspireCard;
