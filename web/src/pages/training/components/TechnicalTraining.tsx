import { Container } from "../../../ui/Container";

export const TechnicalTraining = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 border-l-4 border-navy pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Formación Técnica Aplicada
          </h2>
          <p className="text-gray-600 text-base">
            Ingeniería, inspección y montaje conforme a norma.
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-full text-gray-600 text-base leading-relaxed space-y-5">
          <p>
            <strong>LC Fasteners</strong> desarrolla programas de capacitación técnica orientados a
            sujetadores industriales, sistemas de revestimiento, corrosión, instalación y control de
            calidad, basados estrictamente en normas
            <strong> ASTM, ISO, ASME y AISC</strong>, y en experiencia real de campo y laboratorio.
          </p>

          <p>
            Las capacitaciones están enfocadas en criterio técnico, cumplimiento normativo y
            prevención de fallas, integrando casos reales, ensayos y análisis de desempeño.
          </p>
        </div>
      </Container>
    </section>
  );
};
