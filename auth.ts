import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Twitter from "next-auth/providers/twitter";
import { PlanOptions } from "./schemas/fileEnums";

declare module "next-auth" {
  interface Session {
    user: {
      plan: PlanOptions;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    plan: PlanOptions;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github, Twitter],
  pages: {
    signOut: "/",
    signIn: "/",
    error: "/", // for now we are keeping this, we will change this afterwards.
  },
  callbacks: {
    async jwt({ token }) {
      token.plan = "free"; //*TODO this will come from backend
      return token;
    },
    async session({ session, token }) {
      session.user.plan = token.plan;
      return session;
    },
  },
  debug: true,
});
