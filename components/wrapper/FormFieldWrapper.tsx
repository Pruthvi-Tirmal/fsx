import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface FormFieldWrapperProps {
  control: Control<FieldValues> | undefined;
  children: React.ReactNode;
  formName: string;
  formLabel?: string;
  formDescription?: string;
  isSwitch?: boolean;
  switchLabel?: string;
  mode?: "try" | "free" | "pro";
}

const FormFieldWrapper = ({
  control,
  children,
  formLabel,
  formName,
  formDescription,
  isSwitch,
  switchLabel,
  mode,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={() => (
        <FormItem className="w-full">
          <FormLabel className="flex items-center justify-between">
            <label className="space-x-2">
              {formLabel && <span>{formLabel}</span>}
              {mode && mode !== "pro" && <ModeInfo mode={mode} />}
            </label>
            {isSwitch && (
              <span className="flex items-center space-x-4 mr-2">
                <label htmlFor={switchLabel}>{switchLabel}</label>
                <Switch disabled={mode !== "pro"} id={switchLabel} />
              </span>
            )}
          </FormLabel>
          <FormControl>{children}</FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ModeInfo = ({ mode }: { mode: "try" | "free" | "pro" }) => {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger>
        <span
          className={cn(
            {
              "bg-gray-200 text-gray-700": mode === "try",
              "bg-yellow-400 text-gray-800": mode === "free",
            },
            "rounded-sm text-[10px] font-semibold w-fit px-2 py-1"
          )}>
          {mode === "try" ? "Lock" : "Pro"}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {mode === "try" ? "Sign In to Unlock" : "Unlock with Pro"}
      </TooltipContent>
    </Tooltip>
  );
};

export default FormFieldWrapper;
