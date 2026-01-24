import { Link } from "react-router-dom";
import { Banner } from "../../../ui/Banner";

export const Hero = () => {
  return (
    <Banner
      backgroundImage="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      overlay={true}
      className="min-h-[calc(100vh-95px)] flex items-center"
    >
      <div className="py-20 text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
          Sujetadores industriales con sistemas de revestimientos funcionales conforme a normas ASTM
          e ISO
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Especialistas en integridad mecánica y gestión de activos industriales para sectores
          altamente regulados.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/modelo-gestion"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold  hover:bg-navy-hover transition rounded-2xl"
          >
            Modelo de Gestión
          </Link>

          <Link
            to="/productos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold  hover:bg-navy-hover transition rounded-2xl"
          >
            Productos
          </Link>

          <Link
            to="/validacion-tecnica"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold  hover:bg-navy-hover transition rounded-2xl"
          >
            Ensayos & Trazabilidad
          </Link>

          <Link
            to="/capacitacion"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold  hover:bg-navy-hover transition rounded-2xl"
          >
            Capacitación & I+D+i
          </Link>
        </div>
      </div>
    </Banner>
  );
};
