import { cn } from "@/lib/utils";
import InfoStatusBar from "./InfoStatusBar";
import FileAndConfigContainer from "./FileAndConfigContainer";
interface CoreContainerProps {
  openSideBar: boolean;
  setOpenSideBar: (openSideBar: boolean) => void;
}
const CoreContainer = ({ openSideBar, setOpenSideBar }: CoreContainerProps) => {
  return (
    <div
      className={cn(
        "w-[calc(100%-250px)] px-3 required-h-screen ml-auto mt-4",
        {
          "w-full": !openSideBar,
        }
      )}>
      <InfoStatusBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />
      <FileAndConfigContainer />
    </div>
  );
};

export default CoreContainer;
