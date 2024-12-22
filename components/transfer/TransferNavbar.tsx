"use client";
import { signOut } from "next-auth/react";
import { Crown, LogOut, Megaphone } from "lucide-react";
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
import useUserSession from "@/hooks/useUserSession";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

const TransferNavbar = () => {
  // get user session
  const user = useUserSession();
  const [img, setImg] = useState("");
  useEffect(() => {
    console.log(user);
    if (user?.image) {
      console.log(user?.image);
      setImg(user?.image);
    }
  }, [user?.image]);
  const getInitials = () => {
    const firstLetter = user?.name?.charAt(0);
    const afterSpaceLetter = user?.name?.split(" ")[1]?.charAt(0);
    return `${firstLetter?.toUpperCase()}${afterSpaceLetter?.toUpperCase()}`;
  };
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
              <AvatarImage src={img} key={img} />
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={8}
          className="min-w-[190px] -right-12  absolute py-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex font-medium items-center justify-between">
              <label htmlFor="alert" className="space-x-2 flex items-center ">
                <Megaphone className="w-6 h-6" />
                <span>Alert</span>
              </label>
              <Switch id="alert" defaultChecked={true} />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut({ redirectTo: "/" })}
              className="font-medium cursor-pointer">
              <div className="space-x-2 flex items-center">
                <LogOut className="w-5 h-5" /> <span>Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TransferNavbar;
