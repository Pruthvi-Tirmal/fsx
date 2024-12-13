import { cn } from "@/lib/utils";
import InfoStatusBar from "./InfoStatusBar";
interface CoreContainerProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
}
const CoreContainer = ({ openSideBar, setOpenSideBar }: CoreContainerProps) => {
  return (
    <div
      className={cn("w-[calc(100%-250px)] px-3 h-full ml-auto mt-4", {
        "w-full": !openSideBar,
      })}>
      <InfoStatusBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />
    </div>
  );
};

export default CoreContainer;
