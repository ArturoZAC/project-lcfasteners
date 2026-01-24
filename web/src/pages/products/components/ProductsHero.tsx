import { Banner } from "../../../ui/Banner";
import fondo from "../../../assets/products/productosfondo.webp";

export const ProductsHero = () => {
  return (
    <Banner
      backgroundImage={fondo}
      overlay={true}
      overlayColor="bg-black/70"
      className="py-24 md:py-32 lg:py-40 min-h-[calc(100vh-95px)] flex items-center"
    >
      <div className="max-w-3xl">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Productos, Marco Normativo y Cumplimiento Técnico
        </h1>

        {/* Descripción */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
          Excelencia industrial y aseguramiento de calidad en cada componente bajo estándares
          internacionales.
        </p>

        {/* Botones de acción */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
            <IconDownload className="w-5 h-5 mr-2" />
            Descargar Catálogo
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white transition-colors">
            <IconFileTextFilled className="w-5 h-5 mr-2" />
            Consultar Normas
          </button>
        </div> */}
      </div>
    </Banner>
  );
};
