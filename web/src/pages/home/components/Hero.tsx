import { Link } from "react-router-dom";
import { Banner } from "../../../ui/Banner";
// import { RadialHighlight } from "../../../ui/RadialHighlight";
import main from "../../../assets/home/imagenHero.webp";

export const Hero = () => {
  return (
    <Banner
      backgroundImage={main}
      overlay
      overlayColor="bg-black/40"
      className="min-h-[calc(100vh-95px)] flex items-center overflow-hidden"
      // backgroundEffect={<RadialHighlight />}
    >
      <div className="py-20 text-center w-full">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl text-navy font-bold mb-6"> */}
            Sujetadores industriales y sistemas de revestimiento de alto rendimiento
          </h1>

          <p className="text-lg md:text-xl text-white mb-10">
            {/* <p className="text-lg md:text-xl text-white font-semibold mb-10"> */}
            {/* <p className="text-lg md:text-xl text-gray-800 font-semibold mb-10"> */}
            Cumplimiento normativo ASTM · ISO · ASME para aplicaciones críticas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* 3️⃣ BOTONES */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link
              to="modelo-gestion"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold hover:bg-navy-hover transition rounded-2xl whitespace-nowrap"
            >
              Modelo de Gestión
            </Link>

            <Link
              to="productos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold hover:bg-navy-hover transition rounded-2xl whitespace-nowrap"
            >
              Productos
            </Link>

            <Link
              to="validacion-tecnica"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold hover:bg-navy-hover transition rounded-2xl whitespace-nowrap"
            >
              Ensayos & Trazabilidad
            </Link>

            <Link
              to="capacitacion"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold hover:bg-navy-hover transition rounded-2xl whitespace-nowrap"
            >
              Capacitación & I+D+i
            </Link>
          </div>
        </div>
      </div>
    </Banner>
  );
};
