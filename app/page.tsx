import SignIn from "@/components/credentials/SignIn";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import LandingNavbar from "@/components/landing/LandingNavbar";
import Mockup from "@/components/landing/Mockup";
import PasswordFeature from "@/components/landing/PasswordFeature";
import Pricing from "@/components/landing/Pricing";
import ShowcaseFeatures from "@/components/landing/ShowcaseFeatures";
import TryForFreeBanner from "@/components/landing/TryForFreeBanner";
import DialogWrapper from "@/components/wrapper/DialogWrapper";
import NavbarWrapper from "@/components/wrapper/NavbarWrapper";
import React from "react";

interface HomePageProps {
  searchParams: Promise<{
    callbackurl?: string;
    error?: string;
  }>;
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const { callbackurl } = await searchParams;
  // OauthError
  const { error } = await searchParams;
  const alertStatus = () => {
    if (!!callbackurl) {
      return "callbackURL";
    } else if (!!error) {
      return "error";
    }
    return null;
  };
  return (
    <>
      <NavbarWrapper link="/" enableScroll>
        <LandingNavbar />
      </NavbarWrapper>
      <HeroSection />
      <Mockup />
      <ShowcaseFeatures />
      <Pricing />
      <PasswordFeature />
      <FAQ />
      <TryForFreeBanner />
      {/* <Footer /> */}
      <DialogWrapper openDialog={!!callbackurl || !!error}>
        <SignIn alertCode={alertStatus()} />
      </DialogWrapper>
    </>
  );
};

export default HomePage;
