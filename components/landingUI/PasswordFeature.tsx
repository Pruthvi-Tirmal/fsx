import React from "react";
import { Button } from "../ui/button";
import ImageComponent from "../ImageComponent";
import mockup from "@/public/images/mockup-content-hero.png";
import Balancer from "react-wrap-balancer";
const PasswordFeature = () => {
  return (
    <section className="py-10  bg-[linear-gradient(45deg,white,#fafafa)] required-padding">
      <div className="grid gap-10 md:gap-6 justify-content-between lg:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] ">
        <div className="flex flex-col justify-center order-2 space-y-6 text-center ">
          <h1 className="flex flex-wrap items-center justify-center gap-3 text-4xl font-semibold text-gray-800">
            <span>No QR?</span> <span>No Problem!</span>
          </h1>
          <p className="text-xl font-medium text-gray-500">
            <Balancer>
              Transfer files seamlessly between devices, including computers,
              without a camera! Upload on one device, share a unique password,
              and download securely on another. Convenient and flexible for all
              your needs.
            </Balancer>
          </p>
          <Button size={"xl"} className="mx-auto text-base w-fit">
            Transfer with Password Now!
          </Button>
        </div>
        <div className="p-2 bg-gray-900 aspect-video rounded-xl">
          <ImageComponent src={mockup} alt="mockup image" fill />
        </div>
      </div>
    </section>
  );
};

export default PasswordFeature;
