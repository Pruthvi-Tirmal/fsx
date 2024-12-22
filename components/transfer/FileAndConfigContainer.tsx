"use client";
import FileUploader from "./FileUploader";
import FileConfig from "./FileConfig";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shapes, Pin, Calendar } from "lucide-react";
import QRCode from "./QRCode";
import TransferInfo from "./TransferInfo";
import { useState } from "react";
import { FileTransferType, fileTransferSchema } from "@/schemas/fileTransfer";
import { DevTool } from "@hookform/devtools";
import useUserSession from "@/hooks/useUserSession";
const FileAndConfigContainer = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const user = useUserSession();
  const form = useForm<FileTransferType>({
    resolver: zodResolver(fileTransferSchema(user ? user.plan : "pro")),
    mode: "onChange",
    defaultValues: {
      fileExpiry: "",
      qrExpiry: "",
      urlExpiry: "",
      storageOptions: "p2p",
      expiryOptions: "min",
      emailTo: "",
      isURLEnable: false,
      isPasswordProtectEnable: false,
      isEmailAttachmentEnable: false,
      isFileTrackingEnable: false,
    },
  });
  const onSubmit = (data: FileTransferType) => {
    console.log(data);
    setIsGenerated(true);
  };
  return (
    <main className="my-10 grid lg:grid-cols-2 grid-cols-1 gap-2 bg-white p-2 rounded-lg shadow-sm border min-h-[500px] relative">
      {/* 1st screen to upload files */}
      {!isGenerated ? (
        <Form {...form}>
          <FileUploader />
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <PreferencesPanel isGenerated={isGenerated} title="How to Share?">
              <FileConfig form={form} plan={user ? user.plan : "pro"} />
            </PreferencesPanel>
          </form>
          {/* for debugging */}
          <DevTool control={form.control} />
        </Form>
      ) : (
        <>
          {/* 2nd screen QR code and password if chosen */}
          <QRCode />
          <PreferencesPanel isGenerated={isGenerated} title="Saved Preferences">
            <TransferInfo setIsGenerated={setIsGenerated} />
          </PreferencesPanel>
        </>
      )}
      {/* report an issue */}
      <span className="absolute  -bottom-10 right-3 p-2">
        Having problems?
        <a
          href="mailto:support@example.com?subject=Report%20an%20Issue%20Regarding%20File%20Transfer"
          className="text-sm ml-1 cursor-pointer underline-offset-4 decoration-dotted text-muted-foreground hover:underline sm:text-base">
          Report an Issue
        </a>
      </span>
    </main>
  );
};

interface PreferencesPanelProps {
  children: React.ReactNode;
  title: string;
  isGenerated: boolean;
}
const PreferencesPanel = ({
  children,
  title,
  isGenerated,
}: PreferencesPanelProps) => {
  return (
    <div className="sm:px-2 py-2 relative space-y-3 ">
      <h1 className="text-2xl flex items-center flex-wrap gap-3 justify-between font-semibold">
        <span className="flex items-center gap-2">
          {isGenerated ? <Pin /> : <Shapes />} {title}
        </span>{" "}
        {isGenerated && (
          <span className="text-base flex gap-2 items-center font-medium text-gray-500">
            <Calendar className="w-5 h-5" /> 12/18/2024 12:00 AM
          </span>
        )}
      </h1>
      {children}
    </div>
  );
};

export default FileAndConfigContainer;
