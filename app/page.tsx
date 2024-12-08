import SignIn from "@/components/credentials/SignIn";
import FAQ from "@/components/landingUI/FAQ";
import Footer from "@/components/landingUI/Footer";
import HeroSection from "@/components/landingUI/Hero";
import Mockup from "@/components/landingUI/Mockup";
import PasswordFeature from "@/components/landingUI/PasswordFeature";
import Pricing from "@/components/landingUI/Pricing";
import ShowcaseFeatures from "@/components/landingUI/ShowcaseFeatures";
import TryForFreeBanner from "@/components/landingUI/TryForFreeBanner";
import DialogWrapper from "@/components/wrapper/DialogWrapper";
import React from "react";

interface HomePageProps {
  searchParams: {
    callbackurl?: string;
    error?: string;
  };
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
    <div>
      <HeroSection />
      <Mockup />
      <ShowcaseFeatures />
      <Pricing />
      <PasswordFeature />
      <FAQ />
      <TryForFreeBanner />
      <Footer />
      <DialogWrapper openDialog={!!callbackurl || !!error}>
        <SignIn alertCode={alertStatus()} />
      </DialogWrapper>
    </div>
  );
};

export default HomePage;
