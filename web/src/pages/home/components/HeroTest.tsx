import main from "../../../assets/home/imagenHero.webp";

export const HeroTest = () => {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${main})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient: de gris oscuro/azulado a transparente (izquierda a derecha) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/85 via-slate-600/50 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-12 max-w-7xl">
        <div className="max-w-2xl">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            Validación Técnica y Ensayos Normativos
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Verificación técnica integral de sujetadores y sistemas de revestimiento conforme a
            normas ASTM, ISO y ASME, con resultados verificables y trazabilidad documentada.
          </p>
        </div>
      </div>
    </section>
  );
};
