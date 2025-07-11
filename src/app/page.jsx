import Banner from "@/components/common/Banner/Banner";
import InspireSection from "@/components/common/InspireSection/InspireSection";
import Introduction from "@/components/common/Introduction/Introduction";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <InspireSection />
      <div className="container mx-auto"></div>
    </div>
  );
};

export default HomePage;
