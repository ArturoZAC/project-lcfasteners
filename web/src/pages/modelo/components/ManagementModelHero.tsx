import { Banner } from "../../../ui/Banner";
import main from "../../../assets/modelo/fondomodel.webp";
// import { RadialHighlight } from "../../../ui/RadialHighlight";

export const ManagementModelHero = () => {
  const keyBlocks = [
    "Gobernanza Técnica",
    "Autoridad de Calidad",
    "Normas Abiertas",
    "Integración Técnica Transversal",
    "Trazabilidad Técnica",
    "Mejora Continua e I+D+i",
  ];

  return (
    <Banner
      backgroundImage={main}
      overlay={true}
      overlayColor="bg-black/40"
      className="py-24 md:py-32 lg:py-40 min-h-[calc(100vh-95px)] flex items-center"
      // backgroundEffect={<RadialHighlight />}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Etiqueta superior */}
        <p className="text-white text-xs md:text-sm font-semibold tracking-wider mb-6">
          <span className="px-3 py-2 bg-[#0F1E3B] rounded-2xl">Estrategia Industrial</span>
        </p>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Modelo de Gestión y Enfoque de Mercado
        </h1>

        {/* Descripción */}
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          Nuestro modelo de gestión se fundamenta en normas abiertas, gobernanza técnica y
          trazabilidad documental integral, asegurando decisiones basadas en mérito técnico y
          cumplimiento regulatorio.
        </p>

        {/* Bloques Clave */}
        <div className="mt-10">
          {/* <p className="text-white/80 text-xs md:text-sm font-semibold tracking-wider mb-4 uppercase">
            Bloques Clave
          </p> */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {keyBlocks.map((block, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {block}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Banner>
  );
};
