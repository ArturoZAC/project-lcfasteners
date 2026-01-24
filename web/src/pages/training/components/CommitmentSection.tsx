import { Banner } from "../../../ui/Banner";
import { IconBrandWhatsapp, IconHeartHandshake } from "@tabler/icons-react";

export const CommitmentSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/51955512345", "_blank", "noopener,noreferrer");
  };

  return (
    <Banner backgroundColor="bg-navy-hover" className="py-20 md:py-24">
      <div className="text-center">
        {/* Ícono */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <IconHeartHandshake className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          Comprometidos con el desarrollo industrial sostenible y la ética empresarial
        </h2>

        {/* Descripción */}
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Nuestra misión trasciende la venta de productos; buscamos ser el aliado estratégico que
          garantiza la integridad estructural y el cumplimiento normativo en toda Latinoamérica.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white font-black rounded-lgtransition shadow-lg cursor-pointer rounded-full"
          >
            <IconBrandWhatsapp />
            Contactar
          </button>
        </div>
      </div>
    </Banner>
  );
};
