import { Container } from "../../../ui/Container";

export const TechnicalApproach = () => {
  const targetAudience = [
    "Integridad mecánica",
    "Corrosión",
    "Instalación y montaje",
    "QA/QC",
    "Gestión de activos",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna izquierda - Texto */}
          <div>
            {/* Etiqueta superior */}
            <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4 [hyphens:none]">
              Enfoque Técnico Especializado
            </p>

            {/* Título */}
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight [hyphens:none] [word-break:normal]">
              Enfoque técnico y rol del soporte especializado
            </h3>

            {/* Párrafo principal */}
            <p className="text-gray-700 text-lg leading-relaxed [hyphens:none] [word-break:normal]">
              LC Fasteners se diferencia de otros proveedores al no funcionar como un marketplace de
              sujetadores, sino como un socio técnico especializado. Su operación se orienta a la
              alineación de requisitos legales, normativos y de desempeño, suministrando productos
              técnicamente definidos junto con soporte técnico integrado como parte natural del
              suministro.
            </p>
          </div>

          {/* Columna derecha - Lista */}
          <div>
            <p className="text-black text-lg font-medium mb-4 [hyphens:none] [word-break:normal]">
              Este enfoque está dirigido a responsables de:
            </p>

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
        </div>
      </Container>
    </section>
  );
};
