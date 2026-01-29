import {
  IconClipboardCheck,
  IconFileTextShield,
  IconPointerCog,
  IconTrendingUp2,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const TrainingAreas = () => {
  const areas = [
    {
      icon: IconFileTextShield,
      title: "Sujetadores estructurales y de alta resistencia",
      description:
        "ASTM F3125, ASTM A193, ASTM A194, ASTM F1554, A325, A490, AISC y RCSC. Aplicación correcta según clase de servicio.",
    },
    {
      icon: IconPointerCog,
      title: "Instalación y pretensionado de pernos",
      description:
        "Buenas prácticas conforme ASME PCC-1, ISO 16047 y control técnico del proceso de instalación.",
    },
    {
      icon: IconTrendingUp2,
      title: "Corrosión y sistemas de protección",
      description:
        "ISO 12944, ASTM B117 y ASTM F3393. Selección de recubrimientos para ambientes industriales, marinos y submarinos.",
    },
    {
      icon: IconClipboardCheck,
      title: "Control de calidad y trazabilidad",
      description:
        "Interpretación de MTR, reportes QA/QC, criterios de aceptación y rechazo, y evidencias técnicas verificables.",
    },
    {
      icon: IconAlertTriangle,
      title: "Casos reales y lecciones aprendidas",
      description:
        "Análisis de fallas por mala selección de recubrimientos, errores de instalación y desviaciones normativas.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Áreas de Capacitación</h2>
          <div className="w-16 h-1 bg-navy"></div>
        </div>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                {/* Ícono */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>

                {/* Título */}
                <h3 className="text-base font-bold text-black mb-3">{area.title}</h3>

                {/* Descripción */}
                <p className="text-sm text-navy leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>

        {/* Modalidades de capacitación */}
        <div className="max-w-4xl mx-auto mb-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Modalidades de Capacitación</h3>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Capacitación in-house</li>
            <li>• Charlas técnicas corporativas</li>
            <li>• Seminarios especializados</li>
            <li>• Entrenamiento para inspectores, supervisores y personal de montaje</li>
          </ul>
        </div>

        {/* Enfoque LC Fasteners */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Enfoque LC Fasteners</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            La capacitación se basa en normas abiertas, evidencia técnica y experiencia verificable,
            sin promoción de marcas comerciales y con énfasis en seguridad, durabilidad y
            cumplimiento regulatorio.
          </p>
        </div>
      </Container>
    </section>
  );
};
