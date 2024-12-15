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
    <main className="my-10 grid grid-cols-2 gap-2 bg-white border p-2 rounded-lg min-h-[500px]">
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
    <div className="p-2 relative space-y-3 ">
      <h1 className="text-2xl flex items-center space-x-2 font-semibold">
        {isGenerated ? <Pin /> : <Shapes />} <span>{title}</span>{" "}
      </h1>
      {children}
    </div>
  );
};

export default FileAndConfigContainer;
