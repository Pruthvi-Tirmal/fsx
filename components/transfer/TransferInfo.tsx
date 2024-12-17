import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import Field from "./Field";
interface TransferInfoProps {
  setIsGenerated: (value: boolean) => void;
}
const TransferInfo = ({ setIsGenerated }: TransferInfoProps) => {
  // this will contain all the information about configuration of the transfer
  return (
    <div className="space-y-6">
      <Field label="Share name" value="example-share" />
      <Field label="Transfer mode" value="P2P" />
      <div className="flex items-center sm:flex-nowrap flex-wrap gap-6 sm:gap-2">
        <Field label="File schedular" value="30 mins" />
        <Field label="QR Code expiry" value="30 mins" />
      </div>

      <Field
        isSwitch
        switchLabel="want to send via email"
        label="Email address"
        value="example@gmail.com"
      />
      <Field label="Do you want to attach file in mail?" isCheckbox checked />
      <div className="flex  items-center sm:flex-nowrap flex-wrap gap-6 sm:gap-2">
        <Field label="Do you want to generate URL link?" isCheckbox checked />
        <Field label="URL link expiry" value="30 mins" />
      </div>
      <Field
        label="Unique link for the file"
        value="https://fsx.app/123/files"
        isCopied
      />
      <div className="flex items-center sm:flex-nowrap flex-wrap gap-4 sm:gap-2">
        <Field label="Do you want to password protect?" isCheckbox checked />
        <Field label="Do you want to track analytics?" isCheckbox checked />
      </div>
      <Button
        size={"lg"}
        className="w-full sm:w-[40%]"
        onClick={() => setIsGenerated(false)}>
        <MoveLeft />
        Back
      </Button>
    </div>
  );
};

export default TransferInfo;
