"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useDialogState from "@/states/DialogState";
import { useRouter } from "next/navigation";

interface DialogWrapperProps {
  children: React.ReactNode;
  openDialog?: boolean;
}
const DialogWrapper = ({
  children,
  openDialog = false,
}: DialogWrapperProps) => {
  const { open, setOpen } = useDialogState();
  const router = useRouter();
  const handleOpen = (open: boolean) => {
    setOpen(open);
    // remove all search params if openDialog is true
    if (openDialog) {
      router.push("/");
    }
  };
  return (
    <Dialog open={open || openDialog} onOpenChange={handleOpen}>
      <DialogContent
        onInteractOutside={(event) => {
          if (openDialog) event.preventDefault();
        }}
        className="flex flex-col items-center justify-center max-w-[350px] sm:max-w-[425px]">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
