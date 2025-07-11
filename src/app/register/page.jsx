import PageBanner from "@/components/common/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <PageBanner />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-32">
        <div className="hidden md:flex">
          <Image
            className="w-full h-full"
            src="/assets/images/dontate_invite.webp"
            width={600}
            height={800}
            alt="donor invitor"
          />
        </div>
        <div className="">
          <div className="w-full h-full bg-[#eaedf1]">
            <h1 className="md:py-7 p-4 w-full uppercase bg-primary text-xl text-center md:text-3xl text-white font-bold">
              Register for Donate
            </h1>
            <form className="grid grid-cols-2 gap-2 md:gap-5 mt-5 md:mt-10 p-5 md:p-10">
              <div className=" space-y-5 md:space-y-10">
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-5 md:space-y-10">
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />{" "}
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />{" "}
                <Input
                  className="ring-0 outline-0 border-none bg-white rounded-none p-5"
                  placeholder="Name"
                />
              </div>
              <div className="col-span-2 my-5 text-center">
                <Textarea
                  className="ring-0 h-40 outline-0 border-none bg-white rounded-none"
                  placeholder="Name"
                />
                <Button
                  size="lg"
                  className="uppercase rounded-none bg-primary text-white py-3 px-5 mt-10"
                >
                  Register Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
