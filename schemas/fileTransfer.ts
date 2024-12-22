import z from "zod";
import {
  ExpiryOptions,
  expiryOptionsEnum,
  PlanOptions,
  storageOptionsEnum,
} from "./fileEnums";

//*TODO change file schedular of z.string() to z.date() similar to qrExpiry and URLExpiry
//*TODO need to add for file uploader
//? p2p will not have tracking of file no history and download count no expiry
export const fileTransferSchema = (plan: PlanOptions = "try") => {
  return z
    .object({
      storageOptions: storageOptionsEnum,

      expiryOptions: expiryOptionsEnum,

      fileExpiry: z.string().optional(),
      qrExpiry: z.string().optional(),

      urlExpiry: z.string().optional(),

      isURLEnable:
        plan === "pro"
          ? z.boolean()
          : z
              .boolean()
              .optional()
              .refine((val) => !val, {
                message: planMessage(plan),
              }),

      emailTo:
        plan === "pro"
          ? z.string().email({ message: "Invalid Email!" })
          : z
              .string()
              .optional()
              .refine((val) => !val, {
                message: planMessage(plan),
              }),

      isEmailAttachmentEnable:
        plan === "pro"
          ? z.boolean()
          : z
              .boolean()
              .optional()
              .refine((val) => !val, {
                message: planMessage(plan),
              }),

      isPasswordProtectEnable:
        plan === "pro"
          ? z.boolean()
          : z
              .boolean()
              .optional()
              .refine((val) => !val, {
                message: planMessage(plan),
              }),

      isFileTrackingEnable:
        plan === "pro" || plan === "free"
          ? z.boolean()
          : z
              .boolean()
              .optional()
              .refine((val) => !val, { message: "Sign In to Unlock" }),
    })
    .superRefine((data, ctx) => {
      // storage validation
      if (data.storageOptions !== "p2p") {
        const expType = data.expiryOptions;
        // file expiry
        if (isNaN(Number(data.fileExpiry))) {
          ctx.addIssue({
            code: "custom",
            message: "Please enter a valid number!",
            path: ["fileExpiry"],
          });
        }
        let exp = Number(data.fileExpiry);
        expiryValidation(data, expType, exp, ctx, plan, "fileExpiry");
        // qr expiry
        if (isNaN(Number(data.qrExpiry))) {
          ctx.addIssue({
            code: "custom",
            message: "Please enter a valid number!",
            path: ["qrExpiry"],
          });
        }
        exp = Number(data.qrExpiry);
        expiryValidation(data, expType, exp, ctx, plan, "qrExpiry");
        // url expiry
        if (plan === "pro") {
          if (isNaN(Number(data.urlExpiry))) {
            ctx.addIssue({
              code: "custom",
              message: "Please enter a valid number!",
              path: ["urlExpiry"],
            });
          }
          exp = Number(data.urlExpiry);
          expiryValidation(data, expType, exp, ctx, plan, "urlExpiry");
        }
      }
    })
    .superRefine((data, ctx) => {
      // file expiry dependence on qr and url
      if (data.storageOptions !== "p2p") {
        if (Number(data.qrExpiry) > Number(data.fileExpiry)) {
          ctx.addIssue({
            code: "custom",
            message: "QR Expiry should be less than or equal to File Expiry",
            path: ["qrExpiry"],
          });
        } else if (
          plan === "pro" &&
          Number(data.urlExpiry) > Number(data.fileExpiry)
        ) {
          ctx.addIssue({
            code: "custom",
            message: "URL Expiry should be less than or equal to File Expiry",
            path: ["urlExpiry"],
          });
        }
      }
    })
    .superRefine((data, ctx) => {
      // p2p
      if (data.storageOptions === "p2p") {
        if (data.fileExpiry) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have expiry",
            path: ["fileExpiry"],
          });
        } else if (data.qrExpiry) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have expiry",
            path: ["qrExpiry"],
          });
        } else if (data.urlExpiry) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have expiry",
            path: ["urlExpiry"],
          });
        } else if (data.emailTo?.length) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have email",
            path: ["emailTo"],
          });
        } else if (data.isEmailAttachmentEnable) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have email attachment",
            path: ["isEmailAttachmentEnable"],
          });
        } else if (data.isFileTrackingEnable) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have file tracking",
            path: ["isFileTrackingEnable"],
          });
        } else if (data.isURLEnable) {
          ctx.addIssue({
            code: "custom",
            message: "P2P does not have URL",
            path: ["isURLEnable"],
          });
        }
      }
    });
};

// type
type FileTransferSchemaType = ReturnType<typeof fileTransferSchema>;
export type FileTransferType = z.infer<FileTransferSchemaType>;

const expiryValidation = (
  data: FileTransferType,
  expType: ExpiryOptions,
  exp: number,
  ctx: z.RefinementCtx,
  plan: PlanOptions,
  field: string
) => {
  if (data.storageOptions === "permanent") {
    if (plan === "try" || plan === "free") {
      ctx.addIssue({
        code: "custom",
        message: planMessage(plan),
        path: ["storageOptions"],
      });
    } else {
      //  for pro users
      if (expType === "min") {
        expiryRangeValidation(exp, "min", 5, 60, "", ctx, field);
      } else if (expType === "hr") {
        expiryRangeValidation(exp, "hr", 1, 24, "", ctx, field);
      } else {
        expiryRangeValidation(exp, "day", 1, 30, "", ctx, field);
      }
    }
  } else if (data.storageOptions === "temporary") {
    if (plan === "try" && expType !== "min") {
      ctx.addIssue({
        code: "custom",
        message: planMessage(plan),
        path: ["expiryOptions"],
      });
    } else {
      // for try users /min
      if (plan == "try") {
        expiryRangeValidation(
          exp,
          "min",
          5,
          5,
          "upgrade your plan",
          ctx,
          field
        );
      }
      // for free user
      // day
      if (expType === "day" && plan === "free") {
        ctx.addIssue({
          code: "custom",
          message: planMessage(plan),
          path: ["expiryOptions"],
        });
      }
      // for pro user
      if (plan === "pro" && expType === "day") {
        expiryRangeValidation(exp, "day", 1, 7, "", ctx, field);
      }

      // for both free and pro users
      if (plan !== "try") {
        // min
        if (expType === "min") {
          expiryRangeValidation(exp, "min", 5, 60, "", ctx, field);
        }

        // hr
        if (expType === "hr") {
          expiryRangeValidation(exp, "hr", 1, 24, "", ctx, field);
        }
      }
    }
  }
};

const expiryRangeValidation = (
  src: number,
  type: ExpiryOptions,
  start: number,
  end: number,
  message: string,
  ctx: z.RefinementCtx,
  pathName: string
) => {
  const fullType =
    type === "min" ? "minutes" : type === "hr" ? "hours" : "days";
  if (src < start) {
    ctx.addIssue({
      code: "custom",
      message: `Minimum Expiry is of ${start} ${fullType}`,
      path: [pathName],
    });
  } else if (src > end) {
    ctx.addIssue({
      code: "custom",
      message: `Maximum Expiry is of ${end} ${fullType}, ${message}`,
      path: [pathName],
    });
  }
};

const planMessage = (plan: PlanOptions) => {
  return plan === "try" ? "Sign In to Unlock" : "Unlock in Pro";
};
