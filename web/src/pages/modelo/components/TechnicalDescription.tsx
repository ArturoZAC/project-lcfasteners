import { Container } from "../../../ui/Container";

export const TechnicalDescription = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* H2 – Título técnico */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight [hyphens:none] [word-break:normal]">
            Ingeniería aplicada, cumplimiento normativo y control técnico independiente
          </h2>

          {/* Línea institucional */}
          <div className="w-16 h-1 bg-navy mx-auto mb-8"></div>

          {/* Texto técnico */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto [hyphens:none] [word-break:normal] wrap-normal">
            LC Fasteners opera bajo un modelo de gestión técnica basado en ingeniería, orientado a
            garantizar la integridad mecánica, la resistencia a la corrosión y el cumplimiento
            normativo verificable de sujetadores industriales utilizados en sectores altamente
            regulados.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6 [hyphens:none] [word-break:normal] wrap-normal">
            Este modelo excluye decisiones basadas en marca comercial, preferencias de proveedor o
            criterios no sustentados técnicamente. Todas las definiciones se establecen conforme a
            normas internacionales vigentes y requisitos legales aplicables.
          </p>
        </div>
      </Container>
    </section>
  );
};
