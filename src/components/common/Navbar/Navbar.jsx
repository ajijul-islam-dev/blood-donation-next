import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import Dropdown from "./Dropdown";
import { AlignJustify } from "lucide-react";
import MobileMenuSheet from "./MobileMenuSheet";

const Navbar = () => {
  return (
    <div className="bg-white w-full py-5 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <Link href="/">
            <Image
              src="/assets/images/logo.webp"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <DesktopMenu />
        </div>
        <div className="hidden items-center gap-2 md:flex ">
          <Dropdown />
          <Button size="lg" className="rounded-none px-4 py-2">
            Register
          </Button>
        </div>
        <div className="md:hidden">
          {" "}
          <MobileMenuSheet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
