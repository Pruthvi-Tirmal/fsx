"use client";
import FileUploader from "./FileUploader";
import FileConfig from "./FileConfig";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Shapes, Pin } from "lucide-react";
import QRCode from "./QRCode";
import TransferInfo from "./TransferInfo";
import { useState } from "react";
const FileAndConfigContainer = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const form = useForm();
  return (
    <main className="my-10 grid lg:grid-cols-2 grid-cols-1 gap-2 bg-white p-2 rounded-lg shadow-sm border min-h-[500px] relative">
      {/* 1st screen to upload files */}
      {!isGenerated ? (
        <Form {...form}>
          <FileUploader />
          <PreferencesPanel isGenerated={isGenerated} title="How to Share?">
            <FileConfig form={form} setIsGenerated={setIsGenerated} />
          </PreferencesPanel>
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
      <h1 className="text-2xl flex items-center space-x-2 font-semibold">
        {isGenerated ? <Pin /> : <Shapes />} <span>{title}</span>{" "}
      </h1>
      {children}
    </div>
  );
};

export default FileAndConfigContainer;
