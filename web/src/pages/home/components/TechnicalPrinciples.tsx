import { Container } from "../../../ui/Container";
import {
  IconCircleCheckFilled,
  IconFileTextSpark,
  IconScale,
  IconShieldCheckFilled,
} from "@tabler/icons-react";

export const TechnicalPrinciples = () => {
  const principles = [
    {
      icon: IconShieldCheckFilled,
      title: "Transparencia técnica",
      description:
        "Trazabilidad completa en cada etapa del suministro, desde la definición normativa hasta la validación final del desempeño funcional.",
    },
    {
      icon: IconScale,
      title: "Neutralidad técnica",
      description:
        "Las decisiones se fundamentan exclusivamente en normas, datos medibles y evidencia verificable.",
    },
    {
      icon: IconFileTextSpark,
      title: "Normas abiertas",
      description: "Aplicación rigurosa de estándares internacionales accesibles y auditables.",
    },
    {
      icon: IconCircleCheckFilled,
      title: "Desempeño verificable",
      description:
        "Validación mediante ensayos mecánicos, funcionales y de resistencia a la corrosión.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Nuestra ética</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 [hyphens:none]">
            Principios Técnicos
          </h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* 4️⃣ Cards Grid - Sin cortes silábicos en títulos y textos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            // const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-2xl transition-shadow shadow-sm"
              >
                {/* Icon */}
                {/* <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div> */}

                {/* Title - Sin cortes silábicos */}
                <h3 className="text-lg font-semibold text-navy mb-3 [hyphens:none] [word-break:normal]">
                  {principle.title}
                </h3>

                {/* Description - Sin cortes silábicos */}
                <p className="text-sm text-gray-600 leading-relaxed [hyphens:none] [word-break:normal] wrap-normal">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
