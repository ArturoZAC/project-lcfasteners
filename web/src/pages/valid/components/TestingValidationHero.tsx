// import { IconDownload } from "@tabler/icons-react";
import { Banner } from "../../../ui/Banner";
import estabilidad01 from "../../../assets/valid/estabilidadfondo.webp";

export const TestingValidationHero = () => {
  return (
    <Banner
      backgroundImage={estabilidad01}
      overlay={true}
      // overlayColor="bg-black/75"
      className="py-24 md:py-32 lg:py-40 min-h-[calc(100vh-95px)] flex items-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ensayos, Validación Técnica y Trazabilidad
        </h1>

        {/* Descripción */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
          Garantía de calidad y cumplimiento normativo para la industria de fijaciones y
          recubrimientos en LATAM.
        </p>

        {/* Botón de acción */}
        {/* <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
          <IconDownload className="w-5 h-5 mr-2" />
          Descargar Certificaciones ISO
        </button> */}
      </div>
    </Banner>
  );
};
