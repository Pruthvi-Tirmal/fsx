import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  authRoutes,
  DEFAULT_CALLBACK_ROUTE,
  defaultRoute,
  tryOnRoute,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isTryOn = nextUrl.pathname.startsWith(tryOnRoute);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (!isLoggedIn) {
      const callback = encodeURIComponent(nextUrl.pathname + nextUrl.search);
      return NextResponse.redirect(
        new URL(`${DEFAULT_CALLBACK_ROUTE}?callback=${callback}`, nextUrl)
      );
    }
  }

  if (isTryOn) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(defaultRoute, nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
