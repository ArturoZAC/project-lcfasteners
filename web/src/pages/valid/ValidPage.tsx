import { CorrosionDurability } from "./components/CorrosionDurability";
import { DocumentaryTraceability } from "./components/DocumentaryTraceability";
// import { DigitalTraceability } from "./components/DigitalTraceability";
import { MechanicalFunctionalTesting } from "./components/MechanicalFunctionalTesting";
// import { TestingImportantNote } from "./components/TestingImportantNote";
import { TestingValidationHero } from "./components/TestingValidationHero";
// import { TestingValidationServices } from "./components/TestingValidationServices";
import { ValidatedCoatingSystems } from "./components/ValidatedCoatingSystems";
import { ValidationScope } from "./components/ValidationScope";

export const ValidPage = () => {
  return (
    <>
      <TestingValidationHero />
      <ValidationScope />
      <MechanicalFunctionalTesting />
      <CorrosionDurability />
      <ValidatedCoatingSystems />
      <DocumentaryTraceability />
      {/* <TestingValidationServices /> */}
      {/* <TestingImportantNote /> */}
      {/* <DigitalTraceability /> */}
    </>
  );
};
