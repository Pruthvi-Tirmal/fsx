import FAQ from "@/components/landingUI/FAQ";
import Footer from "@/components/landingUI/Footer";
import HeroSection from "@/components/landingUI/Hero";
import Mockup from "@/components/landingUI/Mockup";
import PasswordFeature from "@/components/landingUI/PasswordFeature";
import Pricing from "@/components/landingUI/Pricing";
import ShowcaseFeatures from "@/components/landingUI/ShowcaseFeatures";
import TryForFreeBanner from "@/components/landingUI/TryForFreeBanner";
import React from "react";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
