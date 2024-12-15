import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface FormFieldWrapperProps {
  control: Control<FieldValues> | undefined;
  children: React.ReactNode;
  formName: string;
  formLabel?: string;
  formDescription?: string;
}

const FormFieldWrapper = ({
  control,
  children,
  formLabel,
  formName,
  formDescription,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={() => (
        <FormItem className="w-full">
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>{children}</FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWrapper;
