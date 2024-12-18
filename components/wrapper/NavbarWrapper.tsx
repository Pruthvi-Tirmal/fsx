"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarWrapperProps {
  children: React.ReactNode;
  link: string;
  enableScroll?: boolean;
  customClassName?: string;
}

const NavbarWrapper = ({
  children,
  link,
  enableScroll,
  customClassName,
}: NavbarWrapperProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    if (!enableScroll) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setScrolled(() => false);
      } else setScrolled(() => true);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [enableScroll]);
  return (
    <nav
      className={cn(
        "grid w-full bg-white/60 grid-cols-2 items-center md:grid-cols-3 required-padding py-2 border",
        {
          "border-b sticky top-0 left-0 z-10 border bg-white/95": scrolled,
        },
        customClassName
      )}>
      <Link href={link} className="flex items-center space-x-3">
        <Image width={45} height={45} src={logo} alt="fsx-logo" />
        <h1 className="text-3xl font-semibold text-gray-700 sm:text-4xl">
          fsX
        </h1>
        <span className="text-lg px-2 py-1 rounded-lg bg-gray-800 text-white font-bold">
          Beta
        </span>
      </Link>
      {children}
    </nav>
  );
};

export default NavbarWrapper;
