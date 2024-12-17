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

interface FormFieldWrapperProps {
  control: Control<FieldValues> | undefined;
  children: React.ReactNode;
  formName: string;
  formLabel?: string;
  formDescription?: string;
  isSwitch?: boolean;
  switchLabel?: string;
}

const FormFieldWrapper = ({
  control,
  children,
  formLabel,
  formName,
  formDescription,
  isSwitch,
  switchLabel,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={() => (
        <FormItem className="w-full">
          <FormLabel className="flex items-center justify-between">
            {formLabel}
            {isSwitch && (
              <span className="flex items-center space-x-4 mr-2">
                <label htmlFor={switchLabel}>{switchLabel}</label>
                <Switch id={switchLabel} />
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

export default FormFieldWrapper;
