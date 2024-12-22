import { PlanOptions } from "@/schemas/fileEnums";
import { FileTransferType } from "@/schemas/fileTransfer";
import { access } from "fs";

/**
 * this will help us to check the access level of the user and pass proper label in the form
 * we have differentiate try --> 0, free --> 1, pro --> 2 higher the number higher the access
 * @param plan This is the plan of the user it can be try,free,pro
 * @param formName This is the name of the form field
 * @returns {label:PlanOptions,attach:boolean} --> this will help to pass the label in the form when attach is true
 */
export const checkLevel = (
  plan: PlanOptions,
  formName: keyof FileTransferType
): { label: PlanOptions; attach: boolean } => {
  const accessLevels: PlanOptions[] = ["try", "free", "pro"];
  const accessLevelIndex = accessLevels.indexOf(plan);
  const formNameWithAccessLevelCollection = [
    { formName: "fileExpiry", access: 1 },
    { formName: "qrExpiry", access: 1 },
    { formName: "emailTo", access: 2 },
    { formName: "isEmailAttachmentEnable", access: 2 },
    { formName: "isURLEnable", access: 2 },
    { formName: "urlExpiry", access: 2 },
    { formName: "isFileTrackingEnable", access: 1 },
    { formName: "isPasswordProtectEnable", access: 2 },
  ];

  const formNameWithAccessLevel = formNameWithAccessLevelCollection.find(
    (item) => item.formName === formName
  )!.access;

  if (formNameWithAccessLevel > accessLevelIndex) {
    return { label: accessLevels[accessLevelIndex + 1], attach: true };
  }

  return { label: accessLevels[accessLevelIndex], attach: false };
};
