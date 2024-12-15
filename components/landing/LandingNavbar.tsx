"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "motion/react";
import useDialogState from "@/states/DialogState";
const LandingNavbar = () => {
  const { setOpen } = useDialogState();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="items-center justify-center hidden space-x-3 text-lg font-medium text-gray-700 capitalize md:flex">
        <Link href={"#pricing"}>Pricing</Link>
        <Link href={"#features"}>features</Link>
        <Link href={"#faq"}>FAQ</Link>
      </div>
      <div className="ml-auto">
        <Button className="hidden md:inline-flex" onClick={() => setOpen(true)}>
          Sign In
        </Button>
        <Button size={"icon"} onClick={handleMenu} className="md:hidden">
          {openMenu ? <HiOutlineX /> : <LuMenu />}
        </Button>
      </div>
      {/* Menu for mobile */}
      {openMenu && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
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
          <Button size={"lg"} onClick={() => setOpen(true)}>
            Sign In
          </Button>
        </motion.section>
      )}
    </>
  );
};

export default LandingNavbar;
