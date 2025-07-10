import React from "react";
import InspireCard from "./InspireCard";

const InspireSection = () => {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <InspireCard />
        <InspireCard />
        <InspireCard />
      </div>
    </div>
  );
};

export default InspireSection;
