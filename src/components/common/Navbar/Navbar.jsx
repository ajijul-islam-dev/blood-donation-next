import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import Dropdown from "./Dropdown";
import { AlignJustify } from "lucide-react";
import MobileMenuSheet from "./MobileMenuSheet";
import { BlurFade } from "@/components/magicui/blur-fade";

const Navbar = () => {
  return (
    <div className="bg-white w-full py-5 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <BlurFade delay={0.1}>
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
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="hidden md:block">
            <DesktopMenu />
          </div>
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="hidden items-center gap-2 md:flex ">
            <Dropdown />
            <Button size="lg" className="rounded-none px-4 py-2">
              Register
            </Button>
          </div>
        </BlurFade>

        <div className="md:hidden">
          <BlurFade delay={0.4}>
            <MobileMenuSheet />
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
