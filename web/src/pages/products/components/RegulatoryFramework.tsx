import { IconChartInfographic, IconFileTextFilled, IconGlobe } from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const RegulatoryFramework = () => {
  const regulations = [
    {
      icon: IconFileTextFilled,
      title: "Normativa nacional aplicable",
    },
    {
      icon: IconChartInfographic,
      title: "Especificaciones técnicas contractuales",
    },
    {
      icon: IconGlobe,
      title: "Normas y códigos internacionales vigentes",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Marco normativo y jerarquía aplicable
          </h2>

          {/* Descripción */}
          <p className="text-gray-600 text-base md:text-lg mb-8">
            La selección de materiales, procesos y métodos de validación se realiza conforme a:
          </p>

          {/* Lista de normativas */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {regulations.map((regulation, index) => {
              const IconComponent = regulation.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-navy" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">
                    {regulation.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Texto de cierre */}
          <p className="text-gray-800 font-semibold text-base">
            Siempre respetando el principio de prevalencia normativa.
          </p>
        </div>
      </Container>
    </section>
  );
};
