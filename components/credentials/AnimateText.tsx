"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { list, MAX } from "@/constants/animateText";

interface AnimateTextProps {
  alertText?: "callbackURL" | "error" | null;
}
const AnimateText = ({ alertText }: AnimateTextProps) => {
  const [text, setText] = useState<string>();
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  useEffect(() => {
    if (!alertText) {
      const clear = setInterval(() => {
        setText(() => list[Math.floor(Math.random() * MAX) % list.length]);
        setStartAnimation(() => true);
      }, 2000);
      return () => {
        clearInterval(clear);
      };
    }
  }, [alertText]);
  const handleAlertText = () => {
    if (alertText === "callbackURL") {
      return "Please Sign In to Continue!";
    } else if (alertText === "error") {
      return "Sign In was canceled. \n Please try again!";
    } else return "Access to fsX";
  };
  return (
    <>
      {startAnimation && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          key={text}
          className="text-2xl font-bolder text-gray-700">
          {text}
        </motion.span>
      )}
      {!startAnimation && (
        <span className="text-2xl whitespace-pre-line font-bolder text-gray-700">
          {handleAlertText()}
        </span>
      )}
    </>
  );
};

export default AnimateText;
