import { Banner } from "../../../ui/Banner";
import training01 from "../../../assets/training/maintraining01.webp";
import training02 from "../../../assets/training/maintraining02.webp";
import training03 from "../../../assets/training/maintraining03.webp";
import heroBlue from "../../../assets/training/FONDO.webp";

export const TrainingSection = () => {
  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <Banner
          backgroundImage={training01}
          overlay
          overlayColor="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          className="min-h-[calc(100vh-95px)] flex items-center justify-center"
        >
          <div className="px-6 pb-10">
            <h2 className="text-3xl font-bold text-white leading-tight text-balance">
              Capacitación Técnica Especializada
              {/* <br /> */}
              {/* I+D+i y Transparencia */}
            </h2>
          </div>
        </Banner>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Banner
          backgroundImage={heroBlue}
          overlay
          overlayColor="bg-gradient-to-br from-blue-950/80 via-slate-900/70 to-white/10"
          className="relative min-h-[calc(100vh-95px)] flex items-center"
        >
          {/* Glow tech sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />

          {/* Contenido centrado real */}
          <div className="relative w-full max-w-7xl mx-auto px-6 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-130">
              {/* IZQUIERDA */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full">
                <img
                  src={training01}
                  alt="Capacitación técnica profesional"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="p-8">
                    <h2 className="text-4xl font-bold text-white leading-tight">
                      Capacitación Técnica Especializada
                      {/* <br /> */}
                      {/* I+D+i y Transparencia */}
                    </h2>
                  </div>
                </div>
              </div>

              {/* DERECHA */}
              <div className="flex flex-col gap-6 h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group flex-1">
                  <img
                    src={training02}
                    alt="Ingeniería industrial"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl group flex-1">
                  <img
                    src={training03}
                    alt="Innovación y desarrollo"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </div>
    </>
  );
};
