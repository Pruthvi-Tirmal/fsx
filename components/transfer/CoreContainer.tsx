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
        " w-[calc(100%-250px)] px-1 sm:px-3 required-h-screen ml-auto mt-3",
        {
          "w-full": !openSideBar,
        }
      )}>
      <InfoStatusBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />
      <FileAndConfigContainer />
      {/* report an issue */}
      <span className="absolute  bottom-0 right-3 p-2">
        Having problems?
        <a
          href="mailto:support@example.com?subject=Report%20an%20Issue%20Regarding%20File%20Transfer"
          className="text-sm ml-1 cursor-pointer underline-offset-4 decoration-dotted text-muted-foreground hover:underline sm:text-base">
          Report an Issue
        </a>
      </span>
    </div>
  );
};

export default CoreContainer;
