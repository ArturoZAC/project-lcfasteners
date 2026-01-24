import { Banner } from "../../../ui/Banner";
import training01 from "../../../assets/training/maintraining01.webp";
import training02 from "../../../assets/training/maintraining02.webp";
import training03 from "../../../assets/training/maintraining03.webp";

export const TrainingSection = () => {
  return (
    <>
      {/* MOBILE VERSION - Solo imagen hero full height */}
      <div className="md:hidden">
        <Banner
          backgroundImage={training01}
          overlay={true}
          overlayColor="bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          className="min-h-[calc(100vh-95px)] flex items-center"
        >
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Capacitación Técnica,
              <br />
              I+D+i y Transparencia
            </h2>
          </div>
        </Banner>
      </div>

      {/* DESKTOP VERSION - Layout 3 imágenes */}
      <div className="hidden md:block">
        <Banner backgroundColor="bg-gray-50" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-100 lg:h-125">
            {/* IZQUIERDA - Imagen grande con texto */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group min-h-75 lg:h-full">
              <img
                src={training01}
                alt="Capacitación técnica profesional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay con texto */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Capacitación Técnica,
                    <br />
                    I+D+i y Transparencia
                  </h2>
                </div>
              </div>
            </div>

            {/* DERECHA - Dos imágenes apiladas verticalmente */}
            <div className="flex flex-col gap-6 min-h-75 lg:h-full">
              {/* Imagen superior */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1 min-h-35">
                <img
                  src={training02}
                  alt="Ingeniería industrial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Imagen inferior */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group flex-1 min-h-35">
                <img
                  src={training03}
                  alt="Innovación y desarrollo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Banner>
      </div>
    </>
  );
};
