import { CommitmentSection } from "./components/CommitmentSection";
import { ContactSection } from "./components/ContactSection";
// import { InnovationSection } from "./components/InnovationSection";
import { TechnicalTraining } from "./components/TechnicalTraining";
import { TrainingAreas } from "./components/TrainingAreas";
import { TrainingSection } from "./components/TrainingSection";

export const TrainingPage = () => {
  return (
    <>
      <TrainingSection />
      <TechnicalTraining />
      <TrainingAreas />
      <CommitmentSection />
      {/* <InnovationSection /> */}
      <ContactSection />
    </>
  );
};
