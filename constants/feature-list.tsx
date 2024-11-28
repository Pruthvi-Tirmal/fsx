import {
  LuCalendarClock,
  LuAreaChart,
  LuFolders,
  LuHardDriveDownload,
  LuFileInput,
  LuSend,
  LuShare2,
} from "react-icons/lu";
import { BsQrCodeScan } from "react-icons/bs";
export const features = [
  {
    id: 1,
    title: "Instant Transfers Without Storage",
    description:
      "Send files quickly and securely without leaving any digital footprint on the server. Just connect and transfer.",
    icon: <LuFileInput className="w-9 h-9" />,
  },
  {
    id: 2,
    title: "Flexible File Storage Options",
    description:
      "Choose how your files are stored: temporary storage or secure cloud solutions.",
    icon: <LuHardDriveDownload className="w-9 h-9" />,
  },
  {
    id: 3,
    title: "Download with Just a QR Code",
    description: "Scan and download files instantly—no app or account needed.",
    icon: <BsQrCodeScan className="w-9 h-9" />,
  },
  {
    id: 4,
    title: "Email File Delivery",
    description:
      "Transfer files directly to an inbox with automated email notifications, making sharing professional and seamless.",
    icon: <LuSend className="w-9 h-9" />,
  },
  {
    id: 5,
    title: "Scheduled Expiration",
    description: "Control file availability with scheduled storage options.",
    icon: <LuCalendarClock className="w-9 h-9" />,
  },
  {
    id: 6,
    title: "Bulk Upload Made Simple",
    description:
      "Easily handle multiple files with our bulk upload feature. Send up to five files at a time or zip them for a more compact transfer.",
    icon: <LuFolders className="w-9 h-9" />,
  },
  {
    id: 7,
    title: "Transfer History and Analytics",
    description:
      "For files in permanent storage, get insight into your transfer history and analytics. Track file usage, expiration dates, and more.",
    icon: <LuAreaChart className="w-9 h-9" />,
  },
  {
    id: 8,
    title: "Share Files Without QR Codes",
    description:
      "Transfer files seamlessly with a unique link or password-protected access.",
    icon: <LuShare2 className="w-9 h-9" />,
  },
];
