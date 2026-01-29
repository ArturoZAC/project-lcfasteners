import { Container } from "../../../ui/Container";

export const OpenStandards = () => {
  const principles = [
    "Transparencia técnica",
    "Neutralidad de marca",
    "Mérito técnico verificable",
    "Libre competencia",
  ];

  return (
    <section className="w-full bg-gray-50 pb-16 md:pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna derecha - Contenido */}
          <div>
            {/* Etiqueta superior */}
            <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
              Normas abiertas y marco normativo
            </p>

            {/* Título */}
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Normas abiertas, mérito técnico y libre competencia
            </h3>

            {/* Párrafo principal */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              LC Fasteners desarrolla y suministra soluciones técnicas en conformidad con los
              principios internacionalmente reconocidos de normalización, en alineación con la
              Organización Mundial del Comercio (OMC), el Comité de Obstáculos Técnicos al Comercio
              (OTC) y el Acuerdo sobre Obstáculos Técnicos al Comercio (Acuerdo TBT).
            </p>

            {/* Párrafo secundario */}
            {/* <p className="text-gray-700 text-lg leading-relaxed">
              Este marco garantiza que las decisiones técnicas se sustenten en criterios objetivos,
              verificables y no discriminatorios, evitando exclusividades técnicas injustificadas o
              restricciones artificiales del mercado.
            </p> */}
          </div>

          {/* Columna izquierda - Lista */}
          <div>
            <p className="text-gray-900 font-semibold text-lg mb-4">Principios aplicados:</p>

            <ul className="space-y-3">
              {principles.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 shrink-0">●</span>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
