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
      <Field label="Transfer mode" value="P2P" />
      <div className="flex items-center gap-2">
        <Field label="File schedular" value="30 mins" />
        <Field label="QR Code expiry" value="30 mins" />
      </div>
      <div className="flex items-center gap-2">
        <Field label="Do you want to send via email?" isCheckbox checked />
        <Field label="Do you want to attach file in mail?" isCheckbox checked />
      </div>
      <Field label="Email address" value="example@gmail.com" />
      <div className="flex  items-center gap-2">
        <Field label="Do you want to generate URL link?" isCheckbox checked />
        <Field label="URL link expiry" value="30 mins" />
      </div>
      <Field
        label="Unique link for the file"
        value="https://fsx.app/123/files"
        isCopied
      />
      <div className="flex items-center gap-2">
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
