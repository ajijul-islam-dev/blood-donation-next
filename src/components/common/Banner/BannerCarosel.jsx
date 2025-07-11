"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CaroselCard from "./CaroselCard";

const BannerCarosel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[70vh] md:h-[85vh]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <CaroselCard slide={slide} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerCarosel;

const slides = [
  {
    subtitle: "Donate blood, save life!",
    title: "Give The Gift Of Life, Donate Blood Today.",
  },
  {
    subtitle: "A single pint can save three lives.",
    title: "Be A Hero, Donate Blood And Save Lives.",
  },
  {
    subtitle: "Your blood can make a difference.",
    title: "Small Act, Big Impact: Donate Blood Now.",
  },
  {
    subtitle: "Every drop counts.",
    title: "Your Blood Is Someone's Hope, Donate It.",
  },
  {
    subtitle: "Be a donor, be a lifesaver.",
    title: "Share Life, Give Blood.",
  },
  {
    subtitle: "Donate blood, inspire others.",
    title: "Unlock Your Inner Hero: Donate Blood Today.",
  },
  {
    subtitle: "Give blood, give hope.",
    title: "A Moment For You, A Lifetime For Them: Donate Blood.",
  },
  {
    subtitle: "The gift of blood is the gift of life.",
    title: "Your Donation Can Light Up A Life.",
  },
  {
    subtitle: "Help save lives, donate blood.",
    title: "Be The Lifeline: Donate Blood.",
  },
  {
    subtitle: "Your blood is precious, share it.",
    title: "Make A Difference: Donate Blood.",
  },
];
