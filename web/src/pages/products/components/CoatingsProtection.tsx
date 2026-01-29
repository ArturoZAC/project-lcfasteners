import {
  IconCircleCheckFilled,
  IconCloud,
  IconDroplets,
  IconPointerCog,
  IconThermometer,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";
import product01 from "../../../assets/products/firstProduct.webp";
import product02 from "../../../assets/products/secondProduct.webp";
import product03 from "../../../assets/products/thirdProduct.webp";

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

  // const coatings = [
  //   {
  //     name: "Zinc / Aluminium Flake",
  //     badge: "ASME F3393 · ISO 10683",
  //     badgeColor: "bg-gray-200 text-gray-700",
  //     borderColor: "border-t-gray-400",
  //     description:
  //       "Recubrimiento no electrolítico de láminas de Zinc y Aluminio, conforme a normas internacionales, diseñado para evitar fragilización por hidrógeno y asegurar desempeño técnico verificable.",
  //     feature: "Alta resistencia a la corrosión",
  //     featureIcon: IconCircleCheckFilled,
  //   },
  //   {
  //     name: "Fluororesina",
  //     badge: "BAJO FRICCIÓN",
  //     badgeColor: "bg-blue-100 text-blue-700",
  //     borderColor: "border-t-blue-400",
  //     description:
  //       "Recubrimiento base PTFE/Xylan con excelente resistencia química y propiedades de lubricidad controlada para montaje y desmontaje repetitivo.",
  //     feature: "Resistencia química",
  //     featureIcon: IconDroplets,
  //   },
  //   {
  //     name: "Fluorosilicona",
  //     badge: "ALTO DESEMPEÑO",
  //     badgeColor: "bg-indigo-100 text-indigo-700",
  //     borderColor: "border-t-indigo-400",
  //     description:
  //       "Recubrimiento funcional con estabilidad térmica y baja variación de fricción, adecuado para aplicaciones críticas con requerimientos de control técnico.",
  //     feature: "Estabilidad térmica",
  //     featureIcon: IconCircleCheckFilled,
  //   },
  // ];

  const coatings = [
    {
      name: "Zinc / Aluminium Flake",
      badge: "ASME F3393 · ISO 10683",
      badgeColor: "bg-gray-200 text-gray-700",
      borderColor: "border-t-gray-400",
      description:
        "Recubrimiento no electrolítico de láminas de Zinc y Aluminio, conforme a normas internacionales, diseñado para evitar fragilización por hidrógeno y asegurar desempeño técnico verificable.",
      feature: "Alta resistencia a la corrosión",
      featureIcon: IconCircleCheckFilled,
      image: product01,
      imageAlt: "Recubrimiento Zinc Aluminium Flake conforme ASME F3393 e ISO 10683",
    },
    {
      name: "Fluororesina",
      badge: "BAJO FRICCIÓN",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-t-blue-400",
      description:
        "Recubrimiento base PTFE/Xylan con excelente resistencia química y propiedades de lubricidad controlada para montaje y desmontaje repetitivo.",
      feature: "Resistencia química",
      featureIcon: IconDroplets,
      image: product02,
      imageAlt: "Recubrimiento Fluororesina PTFE para baja fricción y resistencia química",
    },
    {
      name: "Fluorosilicona",
      badge: "ALTO DESEMPEÑO",
      badgeColor: "bg-indigo-100 text-indigo-700",
      borderColor: "border-t-indigo-400",
      description:
        "Recubrimiento funcional con estabilidad térmica y baja variación de fricción, adecuado para aplicaciones críticas con requerimientos de control técnico.",
      feature: "Estabilidad térmica",
      featureIcon: IconCircleCheckFilled,
      image: product03,
      imageAlt: "Recubrimiento Fluorosilicona para aplicaciones industriales de alto desempeño",
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

        {/* Criterios */}
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

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coatings.map((coating, index) => {
            const FeatureIcon = coating.featureIcon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md border-t-4 ${coating.borderColor} hover:shadow-lg transition-shadow overflow-hidden`}
              >
                {/* Contenido */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{coating.name}</h3>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${coating.badgeColor}`}
                    >
                      {coating.badge}
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 h-22.5">
                    {coating.description}
                  </p>

                  {/* Feature */}
                  <div className="flex items-center gap-2 text-gray-900 font-medium text-sm">
                    <FeatureIcon className="w-4 h-4" />
                    <span>{coating.feature}</span>
                  </div>
                </div>

                {/* Imagen con proporción controlada */}
                <div className="w-full bg-gray-50 aspect-video overflow-hidden">
                  <img
                    src={coating.image}
                    alt={coating.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
