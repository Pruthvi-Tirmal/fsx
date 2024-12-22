import React from "react";
import ImageComponent from "../common/ImageComponent";
import logo from "@/public/images/logo.png";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
const TryForFreeBanner = () => {
  return (
    <section className="relative py-4 mt-10 bg-[linear-gradient(white,transparent)] required-padding">
      <main className="flex flex-col items-center w-full space-y-4">
        <div className="md:w-[150px] w-[100px] aspect-square">
          <ImageComponent src={logo} alt="brand icon" fill />
        </div>
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Experience Seamless File Transfers Today!
        </h1>
        <p className="text-lg w-max-[650px] text-center font-medium text-gray-500">
          <span>No sign-up, no hassle—just quick and easy file sharing. </span>
          <span className="block">
            Start transferring your files instantly and discover the simplicity
            of fsX!
          </span>
        </p>
        <Button asChild size={"xl"} className="text-lg">
          <Link href={"/try-on"}>
            Try fsX Now
            <Rocket />
          </Link>
        </Button>
      </main>
    </section>
  );
};

export default TryForFreeBanner;
