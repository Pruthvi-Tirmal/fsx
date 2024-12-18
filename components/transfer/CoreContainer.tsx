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
        "xs:w-[calc(100%-250px)] w-full px-1 sm:px-3 h-full ml-auto py-3 xs:overflow-y-auto",
        {
          "xs:w-full": !openSideBar,
          "overflow-hidden": openSideBar,
        }
      )}>
      {/* back drop */}
      {openSideBar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="bg-slate-400/65 w-full top-0 left-0 xs:hidden z-10 absolute h-full overflow-hidden"></div>
      )}
      <InfoStatusBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />
      <FileAndConfigContainer />
    </div>
  );
};

export default CoreContainer;
