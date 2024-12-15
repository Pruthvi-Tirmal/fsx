"use client";
import Image from "next/image";
import { LuPanelLeft } from "react-icons/lu";
import { Lightbulb, X, TriangleAlert } from "lucide-react";
import robot from "@/public/images/robot.png";
import Balancer from "react-wrap-balancer";
import DialogWrapper from "../wrapper/DialogWrapper";
import Tips from "./Tips";
import useDialogState from "@/states/DialogState";
interface InfoStatusBarProps {
  setOpenSideBar: (open: boolean) => void;
  openSideBar: boolean;
}
const InfoStatusBar = ({ setOpenSideBar, openSideBar }: InfoStatusBarProps) => {
  const { setOpen } = useDialogState();
  return (
    <div className="relative">
      <button
        onClick={() => setOpenSideBar(!openSideBar)}
        className="absolute transform scale-100 active:scale-90 transition-transform duration-75 ease-linear cursor-pointer top-0">
        <LuPanelLeft className="w-8 h-8 relative" />
        <span className="animate-ping absolute inline-flex h-[10px] w-[10px] top-0 right-0 rounded-full bg-gray-800"></span>
      </button>

      {/* Tips */}
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer transform scale-100 active:scale-90 transition-transform duration-75 ease-linear absolute top-0 right-0">
        <Lightbulb className="w-9 h-9 p-2 relative rounded-full bg-amber-400 text-white" />
        <span className="animate-ping absolute inline-flex h-[12px] w-[12px] top-0 right-0 rounded-full bg-yellow-500"></span>
      </button>
      {/* dialog for tips */}
      <DialogWrapper customStyle="sm:max-w-[725px]">
        <Tips />
      </DialogWrapper>
      {/* status/alert */}
      <div className=" relative border max-w-[850px] mx-auto p-2 shadow-sm bg-white text-gray-800 rounded-lg">
        <X className="w-5 h-5 cursor-pointer absolute top-2 right-2" />
        <div className="flex items-center gap-3">
          {/* <Image width={40} height={40} src={robot} alt="robot icon" /> */}
          <h1 className="text-2xl font-semibold  flex gap-2 items-center">
            <Balancer>
              Unlock a World of Features – Sign Up Today!
              {/* <CircleArrowOutUpRight className="w-6 h-6" /> */}
            </Balancer>
          </h1>
        </div>

        {/*TODO: we need to have animatedText universal component  */}
        <p className=" font-medium">
          Access advanced file transfer options, history tracking, secure
          storage, and more by registering now!
        </p>
      </div>
      {/* alert */}
      <div className=" mx-auto mt-4">
        <p className="font-medium justify-center w-fit mx-auto text-lg py-2 px-4 border-amber-500 border-4 border-dashed text-gray-800 shadow-sm flex items-center gap-5 rounded-lg">
          <TriangleAlert className="w-8 h-8 shrink-0" />
          Some features are locked. Sign up to experience enhanced capabilities
          and tailored benefits.
        </p>
      </div>
    </div>
  );
};

export default InfoStatusBar;
