import React from "react";
import { Button } from "@/components/ui/button";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Badge } from "@/components/ui/badge";
import { pricing } from "@/constants/pricing";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-10 text-center required-padding"
      style={{
        background: "radial-gradient(circle,#fff ,#fafafa,  transparent)",
      }}>
      <h1 className="mb-3 text-4xl font-semibold text-gray-800 ">
        Choose your Plan
      </h1>
      <h3 className="text-xl font-medium text-gray-500">
        Choose the plan that works best for you. Simple Pricing, Powerful
        Features. No hidden charges.
      </h3>
      {/* pricing card */}
      <div className="grid  mx-auto place-content-center gap-6 sm:grid-cols-[repeat(auto-fit,350px)] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr)]  mt-8">
        {pricing.map((price) => (
          <article
            key={price.model}
            className={cn("p-4 text-left bg-gray-100 border rounded-lg", {
              "shadow-md": price.isPro,
            })}>
            {/* Icon */}
            <div className="mb-2">{price.icon}</div>
            <div className="space-y-3">
              <h4 className="flex items-center space-x-3 text-xl font-bold text-gray-800 ">
                <span>{price.model}</span>

                {/* badge */}
                {price.isBadge && (
                  <Badge className="bg-blue-500 rounded-full">Popular</Badge>
                )}
              </h4>
              <h2 className="text-5xl font-bold text-gray-900">
                {price.price}
                <span className="ml-2 text-base">
                  {price.isPro && "/month"}
                </span>
              </h2>
              <p className="text-lg font-medium text-gray-500">
                {price.description}
              </p>
            </div>
            <Button
              className="w-full mt-5 font-medium"
              variant={price.isPro ? "default" : "outline"}>
              {price.isPro ? "Get Started" : "Sign In"}
            </Button>
            {/* list */}

            <ul className="p-4 mt-2 space-y-2 font-medium text-gray-700 list-disc marker:text-2xl">
              {price.isPro && (
                <p className="text-lg font-bold">{price.message}</p>
              )}
              {price.features.map((feature, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger className="cursor-help" asChild>
                    <li className="w-fit">
                      <Balancer>{feature.title}</Balancer>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    align="start"
                    sideOffset={0}
                    className="w-[200px]">
                    {feature.description}
                  </TooltipContent>
                </Tooltip>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
