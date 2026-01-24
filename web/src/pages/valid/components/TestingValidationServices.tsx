import {
  IconCurrencyShekel,
  IconDroplets,
  IconEye,
  IconRotateClockwise,
  IconSettingsSpark,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const TestingValidationServices = () => {
  const services = [
    {
      icon: IconCurrencyShekel,
      title: "ISO 16047",
      description: "Pruebas de coeficiente de fricción, par y tensión en ensambles críticos.",
    },
    {
      icon: IconSettingsSpark,
      title: "Mecánicos ASTM",
      description: "Evaluación de dureza, tracción y límite elástico de materiales.",
    },
    {
      icon: IconRotateClockwise,
      title: "Capacidad Rotacional",
      description: "Validación de ductilidad y resistencia en ensamblaje estructural.",
    },
    {
      icon: IconDroplets,
      title: "Corrosión B117",
      description: "Cámara de niebla salina para evaluar recubrimientos protectores.",
    },
    {
      icon: IconEye,
      title: "Inspección Visual",
      description: "Control dimensional de precisión y defectos superficiales.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 border-l-4 border-navy pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Nuestros Ensayos y Validaciones
          </h2>
          <p className="text-gray-600 text-base">
            Cumplimiento estricto de estándares ASTM, ISO y DIN.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                {/* Icono */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-navy" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>

                {/* Descripción */}
                <p className="text-navy text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
