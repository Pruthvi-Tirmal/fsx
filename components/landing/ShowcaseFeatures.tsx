import React from "react";
import Balancer from "react-wrap-balancer";
import { features } from "@/constants/feature-list";

const ShowcaseFeatures = () => {
  return (
    <section
      id="features"
      className="p-10 bg-[linear-gradient(45deg,#F3F4F6,transparent)]  space-y-4 text-center text-gray-800  required-padding">
      <h1 className="text-4xl font-semibold drop-shadow-sm">
        <Balancer>Packed with Features You’ll Love</Balancer>
      </h1>
      <h4 className="text-xl font-medium sm:text-2xl">
        <Balancer>Designed to Solve Real Problems</Balancer>
      </h4>

      {/* feature card */}
      <main className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] pt-10 items-center w-[90vw] gap-4 mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="h-full p-4 space-y-6 text-left bg-white border rounded-lg shadow-md">
            <div className="p-2 bg-gray-100 rounded-lg w-fit">
              {feature.icon}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-700">
                {feature.title}
              </h1>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ShowcaseFeatures;
