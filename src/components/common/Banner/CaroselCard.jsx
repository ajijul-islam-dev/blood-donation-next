"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";

const CaroselCard = ({ slide }) => {
  return (
    <div className="relative">
      <Image
        className="w-full h-[85vh] object-cover"
        src="/assets/images/Banner/1.jpg"
        width={950}
        height={650}
        alt="Banner Image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(255,255,255,0.3)] text-white flex flex-col   items-center justify-center">
        <div className="container mx-auto space-y-4 text-center md:text-start">
          <BlurFade duration={0.5} delay={0.1}>
            <motion.h2
              key={`subtitle-${slide.subtitle}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-2xl md:text-4xl"
            >
              {slide.subtitle}
            </motion.h2>
          </BlurFade>
          <BlurFade delay={0.2} duration={0.5}>
            <motion.h1
              key={`title-${slide.title}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl text-black font-bold capitalize md:w-[70%]"
            >
              {slide.title}
            </motion.h1>
          </BlurFade>

          <BlurFade delay={0.3} duration={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="destructive"
                className="rounded-none px-4 py-2 w-36 h-14 text-lg"
                size="lg"
              >
                Donate Now
              </Button>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default CaroselCard;
