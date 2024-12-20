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
import { FieldValues, UseFormReturn } from "react-hook-form";
import FormFieldWrapper from "../wrapper/FormFieldWrapper";
import { Button } from "../ui/button";
import { RotateCcw, Dices } from "lucide-react";

interface FileConfigProps {
  form: UseFormReturn<FieldValues, undefined>;
  setIsGenerated: (value: boolean) => void;
}

// *TODO we have think where we will add enum for transfer mode
//? we have 3 mode : try, free, pro

const FileConfig = ({ form, setIsGenerated }: FileConfigProps) => {
  return (
    <main className="w-full">
      <section className="space-y-6 pb-4 h-[500px] px-3 overflow-y-auto">
        {/* Share Name */}
        <FormFieldWrapper
          control={form.control}
          formLabel="Share Name"
          formDescription="Give a Unique Name for your file sharing"
          formName="transferMode"
          isSwitch
          mode="try"
          switchLabel="Choose Randomly">
          <Input placeholder="Share Name" disabled type="text" />
        </FormFieldWrapper>
        {/* select transfer mode */}
        <FormFieldWrapper
          control={form.control}
          formLabel="File Transfer"
          formDescription="This are different file storage options"
          formName="transferMode">
          <Select defaultValue="P2P">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="P2P">P2P</SelectItem>
              <SelectItem value="permanent storage">
                Permanent storage
              </SelectItem>
              <SelectItem value="temporary storage">
                Temporary storage
              </SelectItem>
            </SelectContent>
          </Select>
        </FormFieldWrapper>

        <div className="flex sm:flex-nowrap flex-wrap items-center gap-6 sm:gap-2">
          {/* file scheduler */}
          <FormFieldWrapper
            control={form.control}
            formLabel="File Scheduler"
            formDescription="This file will wipe out after 30 mins"
            formName="fileScheduler"
            mode="try">
            <div className="flex gap-2 items-center">
              <Input type="number" placeholder="30" disabled />
            </div>
          </FormFieldWrapper>
          {/* QR code expiry */}
          <FormFieldWrapper
            control={form.control}
            formLabel="QR code Expiry"
            formDescription="This file will wipe out after 30 mins"
            formName="QRExpiry"
            mode="try">
            <div className="flex gap-2 items-center">
              <Input type="number" placeholder="30" disabled />
            </div>
          </FormFieldWrapper>
        </div>
        {/* email */}
        <div className="space-y-4">
          <FormFieldWrapper
            formDescription="Send By Email Address"
            control={form.control}
            formLabel="Email"
            formName="email"
            isSwitch
            mode="try"
            switchLabel="Want to send via Email">
            <Input type="email" disabled placeholder="example@.com" />
          </FormFieldWrapper>
          <FormFieldWrapper
            mode="try"
            control={form.control}
            formName="attachment">
            <div className="flex space-x-2 items-center">
              <Checkbox id="attachment" />
              <Label htmlFor="attachment">
                do you want to attach file in mail?
              </Label>
            </div>
          </FormFieldWrapper>
        </div>
        {/* url expiry */}
        <div className="flex sm:flex-nowrap flex-wrap gap-6 sm:gap-2 items-center">
          <FormFieldWrapper
            control={form.control}
            formName="urlLink"
            mode="try"
            formDescription="This will generate a unique link for you">
            <div className="flex space-x-2 items-center">
              <Checkbox id="urlLink" />
              <Label htmlFor="urlLink">do you want to generate URL link?</Label>
            </div>
          </FormFieldWrapper>
          <FormFieldWrapper
            control={form.control}
            mode="try"
            formLabel="URL Expiry"
            formDescription="This file will wipe out after 30 mins"
            formName="urlExpiry">
            <div className="flex gap-2 items-center">
              <Input type="number" placeholder="30" disabled />
            </div>
          </FormFieldWrapper>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap gap-4 sm:gap-2 items-center">
          {/* password protection */}
          <FormFieldWrapper
            formDescription="Protect file with password"
            formName="passwordProtection"
            mode="try"
            control={form.control}>
            <div className="flex space-x-2 items-center">
              <Checkbox id="passwordProtect" />
              <Label htmlFor="passwordProtect">
                do you want to password protect?
              </Label>
            </div>
          </FormFieldWrapper>
          {/* track analytics */}
          <FormFieldWrapper
            control={form.control}
            mode="try"
            formName="trackAnalytics"
            formDescription="This will track your file analytics">
            <div className="flex space-x-2 items-center">
              <Checkbox id="trackDownload" />
              <Label htmlFor="trackDownload">
                do you want to track analytics?
              </Label>
            </div>
          </FormFieldWrapper>
        </div>
      </section>
      <div className="flex w-full p-2 justify-center bg-white items-center gap-2 sm:gap-5">
        <Button
          size={"lg"}
          className="w-full sm:w-[40%]"
          onClick={() => setIsGenerated(true)}>
          <Dices />
          Generate
        </Button>
        <Button size={"lg"} className="w-full sm:w-[40%]" variant={"secondary"}>
          <RotateCcw />
          Reset
        </Button>
      </div>
    </main>
  );
};

export default FileConfig;
