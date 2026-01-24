import {
  IconClipboardCheck,
  IconFileTextShield,
  IconPointerCog,
  IconTrendingUp2,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const TrainingAreas = () => {
  const areas = [
    {
      icon: IconFileTextShield,
      title: "Interpretación de Normas",
      description:
        "Formación profunda en normativas ISO/ASTM aplicadas a sistemas de fijación y requerimientos industriales.",
    },
    {
      icon: IconPointerCog,
      title: "Técnicas de Instalación",
      description:
        "Talleres prácticos sobre el torque correcto, pre-tensión y procedimientos operativos críticos en campo.",
    },
    {
      icon: IconClipboardCheck,
      title: "Control de Calidad",
      description:
        "Metrología avanzada, ensayos no destructivos y aseguramiento de estándares técnicos internacionales.",
    },
    {
      icon: IconTrendingUp2,
      title: "Gestión de Integridad",
      description:
        "Análisis integral del ciclo de vida del activo, prevención de fallas por corrosión o fatiga.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Áreas de Capacitación</h2>
          <div className="w-16 h-1 bg-navy mb-6"></div>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop"
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Ícono */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-bold text-black mb-3">{area.title}</h3>

                  {/* Descripción */}
                  <p className="text-sm text-navy leading-relaxed">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
