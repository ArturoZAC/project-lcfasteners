import {
  IconAffiliateFilled,
  IconArrowsRandom,
  IconBuildingBank,
  IconFilter2Check,
  IconShieldCheckFilled,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const ManagementPillars = () => {
  const pillars = [
    {
      id: "01",
      icon: IconBuildingBank,
      title: "Gobernanza Técnica",
      description:
        "Supervisión experta de especificaciones y estándares internacionales en cada orden de compra.",
    },
    {
      id: "02",
      icon: IconShieldCheckFilled,
      title: "Autoridad de Calidad",
      description:
        "Protocolos de inspección rigurosos y validación de certificados de origen y composición.",
    },
    {
      id: "03",
      icon: IconFilter2Check,
      title: "Normas Abiertas",
      description:
        "Flexibilidad para operar bajo estándares ASTM, ISO, DIN y especificaciones propietarias del cliente.",
    },
    {
      id: "04",
      icon: IconAffiliateFilled,
      title: "Integración Transversal",
      description:
        "Sincronización total entre logística, técnica y calidad para entregas Just-in-Time.",
    },
    {
      id: "05",
      icon: IconTrendingUp,
      title: "Trazabilidad",
      description:
        "Rastreo completo desde la materia prima hasta la entrega final en obra o planta.",
    },
    {
      id: "06",
      icon: IconArrowsRandom,
      title: "Mejora continua, I+D+i aplicada",
      description:
        "La investigación aplicada y la innovación orientada a desempeño forman parte del proceso permanente de mejora y actualización normativa.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          {/* Título */}
          <div>
            <p className="text-navy text-sm font-semibold tracking-wider uppercase mb-2">
              Fundamentos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Pilares de Gestión</h2>
          </div>

          {/* Texto descriptivo */}
          <div className="lg:max-w-md">
            <p className="text-black text-sm md:text-base italic border-l-4 border-gray-200 pl-4">
              Nuestra metodología asegura que cada componente cumpla con las especificaciones
              críticas del sector.
            </p>
          </div>
        </div>

        {/* Grid de pilares */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="relative bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                {/* Número de fondo */}
                <div className="absolute top-4 right-4 text-7xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors">
                  {pillar.id}
                </div>

                {/* Icono */}
                <div className="relative z-10 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-navy" />
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
