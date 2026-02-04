import { Compliance } from "./components/Compliance";
import { Hero } from "./components/Hero";
// import { HeroTest } from "./components/HeroTest";
import { OpenStandards } from "./components/OpenStandards";
import { TechnicalApproach } from "./components/TechnicalApproach";
import { TechnicalPrinciples } from "./components/TechnicalPrinciples";

export const HomePage = () => {
  return (
    <>
      {/* <HeroTest /> */}
      <Hero />
      <TechnicalPrinciples />
      <Compliance />
      <TechnicalApproach />
      <OpenStandards />
    </>
  );
};
