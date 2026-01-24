import { IconDownload } from "@tabler/icons-react";
import { Banner } from "../../../ui/Banner";

export const TestingValidationHero = () => {
  return (
    <Banner
      backgroundImage="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
          <IconDownload className="w-5 h-5 mr-2" />
          Descargar Certificaciones ISO
        </button>
      </div>
    </Banner>
  );
};
