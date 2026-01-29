import { Banner } from "../../../ui/Banner";
import complianceImg from "../../../assets/home/piramideOfficial.webp";

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
        <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8 [hyphens:none] [word-break:normal]">
          Cumplimiento normativo y principio de prevalencia
        </h3>

        {/* Texto introductorio */}
        <p className="text-lg text-zinc-300 mb-6 [hyphens:none] [word-break:normal] wrap-normal">
          Todas las actividades de LC Fasteners se ejecutan bajo estricto cumplimiento de:
        </p>

        {/* Lista */}
        <ul className="space-y-3 mb-8">
          {complianceItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1 shrink-0">●</span>
              <span className="text-white text-lg [hyphens:none] [word-break:normal] wrap-normal">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Texto de cierre */}
        <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r shadow-sm mb-10">
          <p className="text-gray-800 font-medium leading-relaxed [hyphens:none] [word-break:normal] wrap-normal">
            En ningún caso se adoptan criterios técnicos, comerciales o de desempeño que prevalezcan
            sobre el marco legal y normativo aplicable.
          </p>
        </div>

        {/* Imagen FINAL – sin cortes */}
        <div className="w-full flex justify-center">
          <img
            src={complianceImg}
            alt="Cumplimiento normativo y estándares técnicos"
            className="w-full max-w-3xl h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </Banner>
  );
};
