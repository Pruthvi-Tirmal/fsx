"use client";
import logo from "@/public/images/logo.png";
import { Button } from "../ui/button";
import { BsApple, BsGoogle, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AnimateText from "./AnimateText";
import { signIn } from "next-auth/react";

interface SignInProps {
  alertCode?: "callbackURL" | "error" | null;
}
const SignIn = ({ alertCode }: SignInProps) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex flex-col text-center items-center space-y-2">
          <Image width={60} height={60} src={logo} alt="fsx-logo" />
          <AnimateText alertText={alertCode} />
        </DialogTitle>
        <DialogDescription className="text-center">
          Join fsX with a click. No passwords, no hassle.
        </DialogDescription>
      </DialogHeader>
      <div className="flex mt-6 w-full space-y-2 flex-col">
        <Button
          className="focus:ring-2 ring-gray-800"
          size={"lg"}
          variant={"secondary"}>
          <BsApple /> Sign In with Apple
        </Button>
        <Button
          onClick={() => signIn("google")}
          className="focus:ring-2 ring-gray-800"
          size={"lg"}
          variant={"secondary"}>
          <BsGoogle /> Sign In with Google
        </Button>
        <Button
          onClick={() => signIn("github")}
          className="focus:ring-2 ring-gray-800"
          size={"lg"}
          variant={"secondary"}>
          <BsGithub /> Sign In with Github
        </Button>
      </div>
      <DialogFooter className="text-sm mt-4 text-muted-foreground">
        <span>
          By continuing, you agree to fsX&apos;s{" "}
          <Link href={""} className="font-semibold ml-1 text-gray-700 ">
            Terms of Service
          </Link>
        </span>
      </DialogFooter>
    </>
  );
};

export default SignIn;
