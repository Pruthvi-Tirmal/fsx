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
    <div className="justify-self-end flex space-x-3 sm:space-x-9 items-center">
      {/* Unlock pro if not */}
      {/* for bigger screen than mobile */}
      <Button className="sm:flex hidden text-base font-semibold" size={"xl"}>
        Become Pro
        <Crown />
      </Button>
      {/* for mobile screen */}
      <Button className="sm:hidden flex-inline" size={"icon"}>
        <Crown />
      </Button>
      {/* avatar */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-[1px] ring-2 transform active:scale-95 cursor-pointer active:ring-1 transition-all duration-75 ease-linear ring-gray-500 rounded-full">
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
