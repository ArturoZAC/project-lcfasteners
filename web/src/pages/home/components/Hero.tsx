import { Link } from "react-router-dom";
import { Banner } from "../../../ui/Banner";
import main from "../../../assets/home/fondoprincipal.webp";

export const Hero = () => {
  return (
    <Banner
      backgroundImage={main}
      overlay={true}
      className="min-h-[calc(100vh-95px)] flex items-center"
    >
      <div className="py-20 text-center w-full">
        {/* 1️⃣ HERO PRINCIPAL - Sin cortes silábicos */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight [hyphens:none] [word-break:normal] wrap-normal">
          Sujetadores industriales con sistemas de revestimientos funcionales conforme a normas ASTM
          e ISO
        </h1>

        {/* 2️⃣ SUBTÍTULO - Sin hyphenation, alineación izquierda en mobile */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto [hyphens:none] text-left md:text-center">
          Especialistas en integridad mecánica y gestión de activos industriales para sectores
          altamente regulados.
        </p>

        {/* 3️⃣ BOTONES - Sin ruptura de palabras, whitespace-nowrap */}
        <div className="flex flex-wrap justify-center gap-4">
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
    </Banner>
  );
};
