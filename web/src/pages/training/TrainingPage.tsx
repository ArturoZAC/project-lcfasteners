import { CommitmentSection } from "./components/CommitmentSection";
import { ContactSection } from "./components/ContactSection";
import { InnovationSection } from "./components/InnovationSection";
import { TrainingAreas } from "./components/TrainingAreas";
import { TrainingSection } from "./components/TrainingSection";

export const TrainingPage = () => {
  return (
    <>
      <TrainingSection />
      <TrainingAreas />
      <CommitmentSection />
      <InnovationSection />
      <ContactSection />
    </>
  );
};
