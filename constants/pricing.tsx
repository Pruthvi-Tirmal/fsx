import { Crown, Snail } from "lucide-react";
export const pricing = [
  {
    model: "Free",
    icon: <Snail className="w-9 h-9" />,
    price: "$0",
    isBadge: false,
    isPro: false,
    description: "Ideal for lightweight file transfers and occasional sharing.",
    features: [
      {
        title: "Temporary Storage (1-Day Auto Wipe)",
        description:
          "Store files temporarily with automatic cleanup after 24 hours for added security.",
      },
      {
        title: "Single or Dual File Transfers",
        description:
          "Transfer up to 2 files simultaneously, with a maximum size of 5 MB each.",
      },
      {
        title: "P2P File Sharing",
        description:
          "Send files directly between devices using secure peer-to-peer technology without servers.",
      },
      {
        title: "Transfer History with Download Count",
        description:
          "Track file-sharing activity and see how many times your files have been downloaded.",
      },
    ],
  },
  {
    model: "Pro",
    icon: <Crown className="w-9 h-9" />,
    price: "$10",
    isPro: true,
    isBadge: true,
    description:
      "Unlock advanced features for enhanced file sharing and storage for everyone.",
    message: "Everything in Free +",
    features: [
      {
        title: "Extended Temporary Storage (7-Day Auto Wipe)",
        description:
          "Store files temporarily with auto-deletion after 7 days for extra flexibility.",
      },
      {
        title: "Secure Permanent Storage with S3",
        description:
          "Save your files permanently with advanced security and scalability via Amazon S3.",
      },
      {
        title: "Customizable File Retention Scheduler",
        description:
          "Set your own cleanup schedules for files stored in permanent storage.",
      },
      {
        title: "Higher File Size Limit",
        description:
          "Share files up to 10 MB with temporary storage or store unlimited sizes permanently",
      },
      {
        title: "Email Sharing via SES",
        description:
          "Easily send files directly via email using secure AWS SES integration.",
      },
      {
        title: "Bulk File Transfers (Up to 5 Files)",
        description:
          "Upload up to 5 files at once or zip multiple files for seamless sharing.",
      },
    ],
  },
];
