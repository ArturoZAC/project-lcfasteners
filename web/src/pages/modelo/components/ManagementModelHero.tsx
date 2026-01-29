import { Banner } from "../../../ui/Banner";
import main from "../../../assets/modelo/fondomodel.webp";
// import { RadialHighlight } from "../../../ui/RadialHighlight";

export const ManagementModelHero = () => {
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
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight"> */}
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> */}
          Modelo de Gestión y Enfoque de Mercado
        </h1>

        {/* Descripción */}
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {/* <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-semibold"> */}
          {/* <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"> */}
          {/* <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"> */}
          Estructura estratégica diseñada para la excelencia técnica y operativa en suministros
          industriales de alto rendimiento.
        </p>
      </div>
    </Banner>
  );
};
