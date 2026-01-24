import {
  IconApiApp,
  IconCircleCheckFilled,
  IconCloud,
  IconDroplets,
  IconPointerCog,
  IconSwipe,
  IconThermometer,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const CoatingsProtection = () => {
  const criteria = [
    {
      icon: IconThermometer,
      title: "Condiciones de Servicio",
    },
    {
      icon: IconCloud,
      title: "Atmósfera de Exposición",
    },
    {
      icon: IconPointerCog,
      title: "Requerimientos de Torque",
    },
  ];

  const coatings = [
    {
      name: "Zinc Flake",
      badge: "ALTA RESISTENCIA",
      badgeColor: "bg-gray-200 text-gray-700",
      borderColor: "border-t-gray-400",
      description:
        "Recubrimiento no electrolítico de láminas de Zinc y Aluminio. Ideal para evitar fragilización por hidrógeno.",
      feature: "1000+ hrs Niebla Salina",
      featureIcon: IconCircleCheckFilled,
    },
    {
      name: "Fluororesina",
      badge: "BAJO FRICCIÓN",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-t-blue-400",
      description:
        "Base PTFE/Xylan. Excelente resistencia química y lubricidad para fácil montaje y desmontaje.",
      feature: "Resistencia Química",
      featureIcon: IconDroplets,
    },
    {
      name: "HDG",
      badge: "ASTM A153",
      badgeColor: "bg-gray-200 text-gray-700",
      borderColor: "border-t-gray-400",
      description:
        "Galvanizado por inmersión en caliente. Máxima protección de barrera para ambientes marinos.",
      feature: "Ambientes Marinos",
      featureIcon: IconSwipe,
    },
    {
      name: "Zincado",
      badge: "ESTÁNDAR",
      badgeColor: "bg-gray-100 text-gray-600",
      borderColor: "border-t-gray-300",
      description:
        "Acabado estético y protección moderada. Disponible en pasivados claros y amarillos (Cr3+).",
      feature: "Versatilidad",
      featureIcon: IconApiApp,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recubrimientos Funcionales y Protección Corrosiva
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            La selección del recubrimiento adecuado es crítica para la vida útil del elemento de
            sujeción. Evaluamos criterios específicos para recomendar la mejor solución:
          </p>
        </div>

        {/* Criterios de selección */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {criteria.map((criterion, index) => {
            const IconComponent = criterion.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300"
              >
                <IconComponent className="w-6 h-6 text-gray-500 shrink-0" />
                <span className="text-gray-900 font-medium">{criterion.title}</span>
              </div>
            );
          })}
        </div>

        {/* Tarjetas de recubrimientos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coatings.map((coating, index) => {
            const FeatureIcon = coating.featureIcon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md border-t-4 ${coating.borderColor} p-6 hover:shadow-lg transition-shadow`}
              >
                {/* Header de la tarjeta */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coating.name}</h3>
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${coating.badgeColor}`}
                  >
                    {coating.badge}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{coating.description}</p>

                {/* Feature destacada */}
                <div className="flex items-center gap-2 text-gray-900 font-medium text-sm">
                  <FeatureIcon className="w-4 h-4" />
                  <span>{coating.feature}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
