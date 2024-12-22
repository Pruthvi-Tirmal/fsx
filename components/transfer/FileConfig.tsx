import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import FormFieldWrapper from "../wrapper/FormFieldWrapper";
import { Button } from "../ui/button";
import { RotateCcw, Dices } from "lucide-react";
import { FileTransferType } from "@/schemas/fileTransfer";
import { useState } from "react";
import { PlanOptions } from "@/schemas/fileEnums";
import PlanLabel from "./PlanLabel";
interface FileConfigProps {
  form: UseFormReturn<FileTransferType, undefined>;
  plan: PlanOptions;
}

const FileConfig = ({ form, plan }: FileConfigProps) => {
  const [sendWithEmail, setSendWithEmail] = useState(false);
  // watch the field
  const selectedStorage = form.watch("storageOptions");
  const isURLEnable = form.watch("isURLEnable");
  return (
    <main className="w-full">
      <section className="space-y-6 pb-4 h-[500px] px-3 overflow-y-auto">
        {/* Share Name */}
        {/* <FormFieldWrapper
          control={form.control}
          formLabel="Share Name"
          formDescription="Give a Unique Name for your file sharing"
          formName="transferMode"
          isSwitch
          plan="try"
          switchLabel="Choose Randomly">
          <Input placeholder="Share Name" disabled type="text" />
        </FormFieldWrapper> */}
        {/* select storage plan */}
        <div className="flex items-center gap-6 sm:gap-2 sm:flex-nowrap flex-wrap">
          <FormFieldWrapper
            control={form.control}
            formLabel="Storage Strategy"
            formDescription="This are different file storage options"
            formName="storageOptions">
            {(field) => (
              <Select onValueChange={field.onChange} {...field}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p2p">P2P</SelectItem>
                  <SelectItem value="permanent" disabled={plan !== "pro"}>
                    Permanent storage{" "}
                    {plan !== "pro" && (
                      <PlanLabel
                        planToImpose={plan === "try" ? "free" : "pro"}
                      />
                    )}
                  </SelectItem>
                  <SelectItem value="temporary">Temporary storage</SelectItem>
                </SelectContent>
              </Select>
            )}
          </FormFieldWrapper>
          <FormFieldWrapper
            control={form.control}
            formLabel="Expiry Strategy"
            formDescription="This are different expiry options"
            formName="expiryOptions">
            {(field) => (
              <Select
                disabled={selectedStorage === "p2p"}
                onValueChange={field.onChange}
                {...field}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="min">minute(s)</SelectItem>
                  <SelectItem value="hr" disabled={plan === "try"}>
                    hour(s){" "}
                    {plan === "try" && (
                      <PlanLabel
                        planToImpose={plan === "try" ? "free" : "pro"}
                      />
                    )}
                  </SelectItem>
                  <SelectItem value="day" disabled={plan !== "pro"}>
                    day(s){" "}
                    {plan !== "pro" && (
                      <PlanLabel
                        planToImpose={plan === "try" ? "free" : "pro"}
                      />
                    )}
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          </FormFieldWrapper>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap items-center gap-6 sm:gap-2">
          {/* file scheduler */}
          <FormFieldWrapper
            control={form.control}
            formLabel="File Expiry"
            formDescription="This file will wipe out after desired time"
            formName="fileExpiry">
            {(field) => (
              <div className="flex gap-2 items-center">
                <Input
                  disabled={selectedStorage === "p2p" || plan === "try"}
                  type="number"
                  {...field}
                />
              </div>
            )}
          </FormFieldWrapper>
          {/* QR code expiry */}
          <FormFieldWrapper
            control={form.control}
            formLabel="QR code Expiry"
            formDescription="This file will wipe out after desired time"
            formName="qrExpiry">
            {(field) => (
              <div className="flex gap-2 items-center">
                <Input
                  disabled={selectedStorage === "p2p" || plan === "try"}
                  {...field}
                  type="number"
                />
              </div>
            )}
          </FormFieldWrapper>
        </div>
        {/* email */}
        <div className="space-y-4">
          <FormFieldWrapper
            formDescription="Send By Email Address"
            control={form.control}
            formLabel="Email To"
            formName="emailTo"
            isSwitch
            switchFn={setSendWithEmail}
            plan={plan}
            switchLabel="want to send via Email">
            {(field) => (
              <Input
                {...field}
                disabled={
                  !sendWithEmail || selectedStorage === "p2p" || plan !== "pro"
                }
                type="email"
                placeholder="example@.com"
              />
            )}
          </FormFieldWrapper>
          <FormFieldWrapper
            plan={plan}
            control={form.control}
            formName="isEmailAttachmentEnable">
            {(field) => (
              <div {...field} className="flex space-x-2 items-center">
                <Checkbox
                  id="attachment"
                  disabled={
                    !sendWithEmail ||
                    selectedStorage === "p2p" ||
                    plan !== "pro"
                  }
                />
                <Label htmlFor="attachment">
                  do you want to attach file in mail?
                </Label>
              </div>
            )}
          </FormFieldWrapper>
        </div>
        {/* url expiry */}
        <div className="flex sm:flex-nowrap flex-wrap gap-6 sm:gap-2 items-center">
          <FormFieldWrapper
            control={form.control}
            formName="isURLEnable"
            plan={plan}
            formDescription="This will generate a unique link for you">
            {(field) => (
              <div {...field} className="flex space-x-2 items-center">
                <Checkbox
                  id="urlLink"
                  disabled={selectedStorage === "p2p" || plan !== "pro"}
                />
                <Label htmlFor="urlLink">
                  do you want to generate URL link?
                </Label>
              </div>
            )}
          </FormFieldWrapper>
          <FormFieldWrapper
            control={form.control}
            plan={plan}
            formLabel="URL Expiry"
            formDescription="This file will wipe out after desired time"
            formName="urlExpiry">
            {(field) => (
              <div className="flex gap-2 items-center">
                <Input
                  {...field}
                  disabled={selectedStorage === "p2p" || !isURLEnable}
                  type="number"
                />
              </div>
            )}
          </FormFieldWrapper>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap gap-4 sm:gap-2 items-center">
          {/* password protection */}
          <FormFieldWrapper
            formDescription="Protect file with password"
            formName="isPasswordProtectEnable"
            plan={plan}
            control={form.control}>
            {(field) => (
              <div {...field} className="flex space-x-2 items-center">
                <Checkbox
                  id="passwordProtect"
                  disabled={selectedStorage === "p2p" || plan !== "pro"}
                />
                <Label htmlFor="passwordProtect">
                  do you want to password protect?
                </Label>
              </div>
            )}
          </FormFieldWrapper>
          {/* track analytics */}
          <FormFieldWrapper
            control={form.control}
            plan={plan}
            formName="isFileTrackingEnable"
            formDescription="This will track your file analytics">
            {(field) => (
              <div {...field} className="flex space-x-2 items-center">
                <Checkbox
                  id="trackDownload"
                  disabled={selectedStorage === "p2p" || plan === "try"}
                />
                <Label htmlFor="trackDownload">
                  do you want to track analytics?
                </Label>
              </div>
            )}
          </FormFieldWrapper>
        </div>
      </section>
      <div className="flex w-full p-2 justify-center bg-white items-center gap-2 sm:gap-5">
        <Button type="submit" size={"lg"} className="w-full sm:w-[40%]">
          <Dices />
          Generate
        </Button>
        <Button
          onClick={() => form.reset()}
          size={"lg"}
          type="button"
          className="w-full sm:w-[40%]"
          variant={"secondary"}>
          <RotateCcw />
          Reset
        </Button>
      </div>
    </main>
  );
};

export default FileConfig;
