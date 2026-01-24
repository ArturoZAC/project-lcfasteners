import { DigitalTraceability } from "./components/DigitalTraceability";
import { TestingImportantNote } from "./components/TestingImportantNote";
import { TestingValidationHero } from "./components/TestingValidationHero";
import { TestingValidationServices } from "./components/TestingValidationServices";

export const ValidPage = () => {
  return (
    <>
      <TestingValidationHero />
      <TestingValidationServices />
      <TestingImportantNote />
      <DigitalTraceability />
    </>
  );
};
