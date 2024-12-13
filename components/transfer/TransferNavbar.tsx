import { Crown } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TransferNavbar = () => {
  return (
    <div className="col-span-2 justify-self-end flex space-x-9 items-center">
      {/* Unlock pro if not */}
      <Button className="text-base font-semibold" size={"xl"}>
        Become Pro
        <Crown />
      </Button>
      {/* avatar */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="border p-[1px] ring-2 transform active:scale-95 cursor-pointer active:ring-1 transition-all duration-75 ease-linear ring-gray-500 rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className=" cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TransferNavbar;
