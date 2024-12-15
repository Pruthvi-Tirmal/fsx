import { Checkbox } from "../ui/checkbox";
import { Copy } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

// read only field component
interface FieldProps {
  label?: string;
  isCheckbox?: boolean;
  checked?: boolean;
  value?: string;
  isCopied?: boolean;
}
const Field = ({ label, isCheckbox, isCopied, value, checked }: FieldProps) => {
  return (
    <div className="space-y-1 w-full cursor-not-allowed">
      {!isCheckbox && (
        <>
          {label && <Label className="text-sm font-medium">{label}</Label>}
          <div className="flex items-center space-x-2">
            <div className="p-2 font-medium w-full bg-gray-50 border rounded-lg">
              {value}
            </div>
            {isCopied && (
              <Button
                size={"icon"}
                className="py-2 bg-gray-50"
                variant={"outline"}>
                <Copy />
              </Button>
            )}
          </div>
        </>
      )}
      {isCheckbox && (
        <div className="flex cursor-not-allowed items-center space-x-2">
          <Checkbox checked={checked} className="cursor-not-allowed" />
          <Label>{label}</Label>
        </div>
      )}
    </div>
  );
};

export default Field;
