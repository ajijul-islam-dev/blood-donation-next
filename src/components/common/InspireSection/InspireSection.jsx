import React from "react";
import InspireCard from "./InspireCard";
import { Description } from "@radix-ui/react-dialog";

const InspireSection = () => {
  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {inspires?.map((inspire) => (
          <InspireCard inspire={inspire} key={inspire.id} />
        ))}
      </div>
    </div>
  );
};

export default InspireSection;

const inspires = [
  {
    id: 1,
    image: "/assets/images/Inspiration/donor.png",
    icon: "/assets/images/Inspiration/icons/first-aid.png",
    title: "Become a Donor",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure",
  },
  {
    id: 2,
    image: "/assets/images/Inspiration/blood.png",
    icon: "/assets/images/Inspiration/icons/tube.png",
    title: "Why Give Blood?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure",
  },
  {
    id: 3,
    image: "/assets/images/Inspiration/donations.png",
    icon: "/assets/images/Inspiration/icons/heart.png",
    title: "How Donations Helps",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure",
  },
];
