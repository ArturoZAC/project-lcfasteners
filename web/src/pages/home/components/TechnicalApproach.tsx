import { Container } from "../../../ui/Container";
import initial01 from "../../../assets/home/initial01.webp";

export const TechnicalApproach = () => {
  const targetAudience = [
    "Integridad mecánica",
    "Corrosión",
    "Instalación y montaje",
    "Aseguramiento y control de calidad",
    "Gestión de activos e infraestructura",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna de texto */}
          <div className="order-2 lg:order-1">
            {/* Etiqueta superior */}
            <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4 [hyphens:none]">
              Enfoque Técnico Especializado
            </p>

            {/* Título - Sin cortes silábicos */}
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight [hyphens:none] [word-break:normal]">
              Enfoque técnico y rol del soporte especializado
            </h3>

            {/* Párrafo 1 - Sin cortes silábicos */}
            <p className="text-gray-700 text-lg leading-relaxed mb-4 [hyphens:none] [word-break:normal] wrap-normal">
              LC Fasteners no opera como una plataforma de comercialización masiva de sujetadores.
              Su enfoque se basa en alinear requisitos legales, normativos y de desempeño,
              suministrando productos técnicamente definidos y soporte técnico integrado como parte
              natural del suministro.
            </p>

            {/* Párrafo 2 - Sin cortes silábicos */}
            <p className="text-gray-700 text-lg font-medium mb-4 [hyphens:none] [word-break:normal]">
              Este enfoque está dirigido a responsables de:
            </p>

            {/* Lista de público objetivo - Sin cortes */}
            <ul className="space-y-3">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-3 mt-1 shrink-0">●</span>
                  <span className="text-gray-700 text-base [hyphens:none] [word-break:normal]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de imagen */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={initial01}
                alt="Infraestructura industrial - Sistemas de almacenamiento"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
