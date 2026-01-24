import { Banner } from "../../../ui/Banner";

export const Compliance = () => {
  const complianceItems = [
    "Legislación nacional vigente",
    "Normativa técnica nacional aplicable",
    "Especificaciones técnicas contractuales",
    "Códigos internacionales de diseño",
    "Normas técnicas internacionales vigentes y actualizadas",
  ];

  return (
    <Banner backgroundColor="bg-navy-hover" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8">
          Cumplimiento normativo y principio de prevalencia
        </h3>

        {/* Texto introductorio */}
        <p className="text-lg text-zinc-300 mb-6">
          Todas las actividades de LC Fasteners se ejecutan bajo estricto cumplimiento de:
        </p>

        {/* Lista de cumplimiento */}
        <ul className="space-y-3 mb-8">
          {complianceItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 shrink-0">●</span>
              <span className="text-white text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* Texto de cierre con énfasis legal */}
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r shadow-sm">
          <p className="text-gray-800 font-medium leading-relaxed">
            En ningún caso se adoptan criterios técnicos, comerciales o de desempeño que prevalezcan
            sobre el marco legal y normativo aplicable.
          </p>
        </div>
      </div>
    </Banner>
  );
};
