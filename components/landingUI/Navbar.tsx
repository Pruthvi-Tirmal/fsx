"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LuMenu } from "react-icons/lu";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "motion/react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setScrolled(() => false);
      } else setScrolled(() => true);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-10 grid w-full bg-white/60 grid-cols-2 md:grid-cols-3 required-padding py-2",
        {
          "border-b bg-white/95": scrolled,
        }
      )}>
      <Link href={"/"} className="flex items-center space-x-3">
        <Image width={45} height={45} src={logo} alt="fsx-logo" />
        <h1 className="text-3xl font-semibold text-gray-700 sm:text-4xl">
          fsX
        </h1>
      </Link>
      <div className="items-center justify-center hidden space-x-3 text-lg font-medium text-gray-700 capitalize md:flex">
        <Link href={"#pricing"}>Pricing</Link>
        <Link href={"#features"}>features</Link>
        <Link href={"#faq"}>FAQ</Link>
      </div>
      <div className="ml-auto">
        <Button className="hidden md:inline-flex">Sign In</Button>
        <Button size={"icon"} onClick={handleMenu} className="md:hidden">
          {openMenu ? <HiOutlineX /> : <LuMenu />}
        </Button>
      </div>
      {/* Menu for mobile */}
      {openMenu && (
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute md:hidden font-semibold text-gray-800 border-t flex top-[60px] flex-col bg-inherit text-lg w-full p-2">
          <Link className="px-4 py-2 border-b" href={"#pricing"}>
            Pricing
          </Link>
          <Link className="px-4 py-2 border-b" href={"#features"}>
            Features
          </Link>
          <Link className="px-4 py-2 border-b" href={"#faq"}>
            FAQ
          </Link>
          <Button size={"lg"}>Sign In</Button>
        </motion.section>
      )}
    </nav>
  );
};

export default Navbar;
