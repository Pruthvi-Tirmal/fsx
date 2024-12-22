import React from "react";
import { Button } from "../ui/button";
import { Balancer } from "react-wrap-balancer";
import { ArrowRight, Crown } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-65px)]  space-y-6 text-gray-700 required-padding bg-[linear-gradient(transparent,white)]">
      <div className="space-y-8 text-center">
        <Link href={"/try-on"}>
          <Badge className="justify-center px-4 text-base text-blue-400 rounded-full cursor-pointer bg-blue-100/20 hover:bg-blue-100">
            Start using fsX for free 🥳
          </Badge>
        </Link>
        <h1 className="text-5xl font-semibold md:text-6xl lg:text-7xl ">
          <Balancer>Effortless File Transfers, Anywhere, Anytime.</Balancer>
        </h1>
        <h3 className="text-2xl md:text-3xl">
          <Balancer>Transfer files directly without storage or delays</Balancer>
        </h3>
        <div className="flex flex-wrap-reverse items-center justify-center gap-3">
          <Button
            asChild
            size={"xl"}
            className="text-base font-medium"
            variant={"outline"}>
            <Link href="/transfer">
              Try fsX Now <ArrowRight />
            </Link>
          </Button>
          <Button asChild className="text-base font-semibold" size={"xl"}>
            <Link href="/transfer">
              Become Pro
              <Crown />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
