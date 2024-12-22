import { Control, ControllerRenderProps } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";
import { FileTransferType } from "@/schemas/fileTransfer";
import { PlanOptions } from "@/schemas/fileEnums";
import PlanLabel from "../transfer/PlanLabel";
import { checkLevel } from "@/lib/accessLevelInFields";

interface FormFieldWrapperProps<T extends keyof FileTransferType> {
  control: Control<FileTransferType> | undefined;
  children: (
    field: ControllerRenderProps<FileTransferType, T>
  ) => React.ReactNode;
  formName: T;
  formLabel?: string;
  formDescription?: string;
  isSwitch?: boolean;
  switchLabel?: string;
  plan?: PlanOptions;
  switchFn?: (x: boolean) => void;
}

const FormFieldWrapper = <T extends keyof FileTransferType>({
  control,
  children,
  formLabel,
  formName,
  formDescription,
  isSwitch,
  switchLabel,
  plan,
  switchFn,
}: FormFieldWrapperProps<T>) => {
  let level: { attach: boolean; label: PlanOptions } | null = null;
  if (plan) level = checkLevel(plan, formName);
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="flex items-center justify-between">
            <label className="space-x-2">
              {formLabel && <span>{formLabel}</span>}
              {level && level.attach && (
                <PlanLabel planToImpose={level.label} />
              )}
            </label>
            {/* switch is only for pro add we have one switch one so its fine to keep it as it is */}
            {isSwitch && (
              <span className="flex items-center [&>label]:hidden sm:[&>label]:flex space-x-4 mr-2">
                <label htmlFor={switchLabel}>{switchLabel}</label>
                <Switch
                  onCheckedChange={switchFn}
                  disabled={plan !== "pro"}
                  id={switchLabel}
                />
              </span>
            )}
          </FormLabel>
          <FormControl>{children(field)}</FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWrapper;
