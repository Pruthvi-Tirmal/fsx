"use client";
import { BiSearchAlt } from "react-icons/bi";
import { LuFileClock, LuFile } from "react-icons/lu";
import { motion } from "motion/react";

interface SidebarProps {
  openSideBar: boolean;
}
const Sidebar = ({ openSideBar }: SidebarProps) => {
  return (
    <motion.div
      initial={
        openSideBar
          ? { width: "250px", opacity: 1 }
          : { width: "0px", opacity: 0 }
      }
      animate={
        openSideBar
          ? { width: "250px", opacity: 1 }
          : { width: "0px", opacity: 0 }
      }
      transition={{ duration: 0.3, ease: "linear" }}
      className="border-r-2 whitespace-nowrap overflow-y-auto mt-0 absolute border-t px-2 py-3 bg-white bg-opacity-65 h-full top-0 left-0 z-20 ">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-800 text-2xl">Share History</h2>
      </div>
      <div className="w-full mt-5 h-[40px] flex justify-between items-center rounded-lg border-2 ">
        <input
          type="text"
          className="h-full w-[90%] bg-white rounded-lg py-4 px-2 outline-none"
        />
        <BiSearchAlt className="shrink-0 w-8 h-8 text-muted-foreground" />
      </div>
      {/* all file history */}
      <main className="mt-10">
        <p className="font-bold text-sm mb-1 text-gray-800 ml-2">Temporary</p>
        {/* files */}
        <section>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFileClock className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFileClock className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFileClock className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
        </section>
      </main>
      <main className="mt-5">
        <p className="font-bold text-sm mb-1 text-gray-800 ml-2">Permanent</p>
        {/* files */}
        <section>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFile className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFile className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
          <p className="rounded-lg flex space-x-2 items-center px-2 py-1 hover:bg-gray-200 transition-colors duration-75 ease-linear truncate text-gray-700 text-lg font-semibold cursor-pointer">
            <LuFile className="text-gray-800" /> <span>File Name.pdf</span>
          </p>
        </section>
      </main>
    </motion.div>
  );
};

export default Sidebar;
