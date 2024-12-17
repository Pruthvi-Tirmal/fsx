import { ScanQrCode } from "lucide-react";
import qr from "@/public/images/dummy-qrcode.png";
import Image from "next/image";
import Field from "./Field";
const QRCode = () => {
  return (
    <div className="sm:px-2 py-3 flex  flex-col items-center space-y-4">
      <span className="p-2 rounded-lg border">
        <ScanQrCode className="w-8 h-8" />
      </span>
      <div className="text-center">
        <h1 className="font-semibold text-2xl">Scan QR Code</h1>
        <p className="text-gray-500 font-medium">
          Scan this QR code to get files
        </p>
      </div>
      {/* QR code */}
      <div className="p-2 rounded-lg border">
        <Image width={350} height={350} src={qr} alt="QR code" />
      </div>
      {/* password if chosen*/}
      <div className="inline-flex  relative items-center justify-center w-full">
        <hr className="w-full sm:w-[70%] h-[2px] my-4 bg-gray-500 border-0 " />
        <span className="absolute px-3 text-nowrap  font-medium text-gray-800 -translate-x-1/2 bg-white left-1/2  ">
          Files are password protected 🔒
        </span>
      </div>
      <div className="w-full sm:w-[80%]">
        <Field value="1234567" isCopied />
      </div>
    </div>
  );
};

export default QRCode;
