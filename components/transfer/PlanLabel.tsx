import { PlanOptions } from "@/schemas/fileEnums";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * think is a logic where a user has lower permissions then free, pro
 * for example, if user has try then it will show free and if user has free then it will show pro
 */
const PlanLabel = ({ planToImpose }: { planToImpose: PlanOptions }) => {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger>
        <span
          className={cn(
            {
              "bg-gray-200 text-gray-700": planToImpose === "free",
              "bg-yellow-400 text-gray-800": planToImpose === "pro",
            },
            "rounded-sm text-[10px] font-semibold w-fit px-2 py-1"
          )}>
          {planToImpose === "free" ? "Lock" : "Pro"}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {planToImpose === "free" ? "Sign In to Unlock" : "Unlock with Pro"}
      </TooltipContent>
    </Tooltip>
  );
};

export default PlanLabel;
