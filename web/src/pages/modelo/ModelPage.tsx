// import { CompanyTrajectory } from "./components/CompanyTrajectory";
import { ManagementModelGraphic } from "./components/ManagementModelGraphic";
import { ManagementModelHero } from "./components/ManagementModelHero";
import { ManagementPillars } from "./components/ManagementPillars";
import { TechnicalDescription } from "./components/TechnicalDescription";
// import { TechnicalDisclaimer } from "./components/TechnicalDisclaimer";

export const ModelPage = () => {
  return (
    <>
      <ManagementModelHero />
      <TechnicalDescription />
      <ManagementModelGraphic />
      {/* <CompanyTrajectory /> */}
      <ManagementPillars />
      {/* <TechnicalDisclaimer /> */}
    </>
  );
};
