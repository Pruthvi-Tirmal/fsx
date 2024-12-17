"use client";
import { LuPanelLeft } from "react-icons/lu";
import { Lightbulb, X, TriangleAlert } from "lucide-react";
import Balancer from "react-wrap-balancer";
import DialogWrapper from "../wrapper/DialogWrapper";
import Tips from "./Tips";
import useDialogState from "@/states/DialogState";
import { useState } from "react";
import { cn } from "@/lib/utils";
interface InfoStatusBarProps {
  setOpenSideBar: (open: boolean) => void;
  openSideBar: boolean;
}
const InfoStatusBar = ({ setOpenSideBar, openSideBar }: InfoStatusBarProps) => {
  const { setOpen } = useDialogState();
  const [ads, setAds] = useState(true);
  return (
    <div>
      <div className="flex relative justify-between items-center mb-1">
        <button
          onClick={() => setOpenSideBar(!openSideBar)}
          className={cn(
            "transform scale-100 active:scale-90 transition-transform duration-75 ease-linear fixed xs:static top-[75px] z-50 cursor-pointer",
            { static: !openSideBar }
          )}>
          <LuPanelLeft className="w-8 h-8 relative" />
          <span className="animate-ping absolute inline-flex h-[10px] w-[10px] top-0 right-0 rounded-full bg-gray-800"></span>
        </button>
        {/* Tips */}
        <button
          onClick={() => setOpen(true)}
          className={cn(
            "cursor-pointer transform scale-100 active:scale-90 transition-transform fixed top-[75px] right-[10px] xs:static duration-75 z-50 ease-linear",
            { static: !openSideBar }
          )}>
          <Lightbulb className="w-9 h-9 p-2 relative rounded-full bg-amber-400 text-white" />
          <span className="animate-ping absolute inline-flex h-[12px] w-[12px] top-0 right-0 rounded-full bg-yellow-500"></span>
        </button>
      </div>

      {/* marketing */}
      {ads && (
        <div className="relative border max-w-[850px] mx-auto p-2 shadow-sm bg-white text-gray-800 rounded-lg">
          <X
            className="w-5 h-5 cursor-pointer z-5 absolute top-2 right-2"
            onClick={() => setAds(false)}
          />

          <div className="flex items-center">
            <h1 className="md:text-2xl text-lg font-semibold w-[95%] flex gap-2 items-center">
              <Balancer>Unlock a World of Features – Sign Up Today!</Balancer>
            </h1>
          </div>

          {/*TODO: we need to have animatedText universal component  */}
          <p className="text-sm md:text-base  font-medium">
            Access advanced file transfer options, history tracking, secure
            storage, and more by registering now!
          </p>
        </div>
      )}

      {/* alert */}
      <div className="mx-auto mt-4">
        <p className="font-medium justify-center w-fit mx-auto  sm:text-lg py-2 px-4 bg-yellow-300 rounded-lg flex items-center gap-2 ">
          <TriangleAlert className="sm:w-8 sm:h-8 w-7 h-7 shrink-0" />
          <span>
            Some features are locked. <b>Sign up</b> to experience enhanced
            capabilities and tailored benefits.
          </span>
        </p>
      </div>
      {/* dialog for tips */}
      <DialogWrapper customStyle="sm:max-w-[625px]">
        <Tips />
      </DialogWrapper>
    </div>
  );
};

export default InfoStatusBar;
