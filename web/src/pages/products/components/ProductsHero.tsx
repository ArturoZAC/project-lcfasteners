import { Banner } from "../../../ui/Banner";
import fondo from "../../../assets/products/heroProducts.webp";
// import { RadialHighlight } from "../../../ui/RadialHighlight";

export const ProductsHero = () => {
  const standards = [
    "ASTM F3125",
    "ASTM A193",
    "ASTM A563",
    "ASTM F1554",
    "Sistemas conforme ASTM F3393",
  ];

  return (
    <Banner
      backgroundImage={fondo}
      overlay={true}
      overlayColor="bg-black/40"
      className="py-24 md:py-32 lg:py-40 min-h-[calc(100vh-95px)] flex items-center"
      // backgroundEffect={<RadialHighlight />}
    >
      <div className="max-w-3xl">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Productos, Marco Normativo y Cumplimiento Técnico
        </h1>

        {/* Descripción */}
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
          Sujetadores industriales definidos técnicamente conforme a norma aplicable, clase, grado,
          condición de servicio y sistema de revestimiento compatible.
        </p>

        {/* Normas incluidas */}
        <div className="mt-8">
          <p className="text-white/80 text-sm md:text-base font-semibold mb-4">Incluye:</p>
          <div className="flex flex-wrap gap-3">
            {standards.map((standard, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Banner>
  );
};
