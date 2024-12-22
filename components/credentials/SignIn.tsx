"use client";
import logo from "@/public/images/logo.png";
import { Button } from "../ui/button";
import { BsGoogle, BsGithub } from "react-icons/bs";
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

// X (twitter) icon
type XProps = {
  size?: string;
};

const XIcon = ({ size }: XProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z"
    />
  </svg>
);

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
          onClick={() => signIn("twitter", { redirectTo: "/transfer" })}
          className="focus:ring-2 ring-gray-800"
          size={"lg"}
          variant={"secondary"}>
          <XIcon /> Sign In with X
        </Button>
        <Button
          onClick={() => signIn("google", { redirectTo: "/transfer" })}
          className="focus:ring-2 ring-gray-800"
          size={"lg"}
          variant={"secondary"}>
          <BsGoogle /> Sign In with Google
        </Button>
        <Button
          onClick={() => signIn("github", { redirectTo: "/transfer" })}
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
