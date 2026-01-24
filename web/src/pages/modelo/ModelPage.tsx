import { CompanyTrajectory } from "./components/CompanyTrajectory";
import { ManagementModelHero } from "./components/ManagementModelHero";
import { ManagementPillars } from "./components/ManagementPillars";

export const ModelPage = () => {
  return (
    <>
      <ManagementModelHero />
      <CompanyTrajectory />
      <ManagementPillars />
    </>
  );
};
