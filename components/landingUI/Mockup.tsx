"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ImageComponent from "../ImageComponent";
import mockupImage from "@/public/images/mockup-content-hero.png";
const Mockup = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [75, 0]);
  return (
    <section
      className="py-8 required-padding"
      ref={containerRef}
      style={{
        perspective: "1000px",
        background:
          "repeating-radial-gradient(circle, #374151,#fafafa , transparent)",
      }}>
      <motion.div
        style={{ rotateX }}
        initial={{ rotateX: scrollYProgress.get() === 1 ? 0 : 75 }}
        className=" mx-auto  lg:w-[1000px] aspect-video p-2  lg:p-4 bg-gray-900 rounded-xl">
        <ImageComponent
          src={mockupImage}
          placeholder="blur"
          alt="fsx mockup"
          fill
        />
      </motion.div>
    </section>
  );
};

export default Mockup;
