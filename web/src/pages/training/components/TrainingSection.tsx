import { Banner } from "../../../ui/Banner";
import training01 from "../../../assets/training/maintraining01.webp";
import training02 from "../../../assets/training/maintraining02.webp";
import training03 from "../../../assets/training/maintraining03.webp";
import heroBlue from "../../../assets/training/FONDO.webp";
import { IconPhone, IconMail } from "@tabler/icons-react";

export const TrainingSection = () => {
  const phoneNumber = "+51957194775";
  const email = "tecnico@lcfasteners.com";
  const whatsappMessage = "Quisiera una capacitación ahora mismo";

  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[\s+]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent("Solicitud de Capacitación")}&body=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <Banner
          backgroundImage={training01}
          overlay
          overlayColor="bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          className="min-h-[calc(100vh-95px)] flex items-center"
        >
          <div className="px-6 pb-10 w-full">
            <h2 className="text-2xl font-bold text-white leading-tight mb-6">
              Programas de capacitación orientados a integridad mecánica, sistemas de revestimiento
              y cumplimiento normativo en proyectos industriales.
            </h2>

            {/* CTAs Mobile */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                <IconPhone className="w-5 h-5" />
                Contacto Capacitación
              </a>

              <a
                href={mailtoLink}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors"
              >
                <IconMail className="w-5 h-5" />
                Enviar Correo
              </a>
            </div>

            {/* Info de contacto */}
            <div className="mt-4 text-white/80 text-sm space-y-1">
              <p>Teléfono: +51 957 194 775</p>
              <p>Correo: tecnico@lcfasteners.com</p>
            </div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                      Programas de capacitación orientados a integridad mecánica, sistemas de
                      revestimiento y cumplimiento normativo en proyectos industriales.
                    </h2>

                    {/* CTAs Desktop */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
                      >
                        <IconPhone className="w-5 h-5" />
                        Contacto Capacitación
                      </a>

                      <a
                        href={mailtoLink}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors"
                      >
                        <IconMail className="w-5 h-5" />
                        Enviar Correo
                      </a>
                    </div>

                    {/* Info de contacto Desktop */}
                    <div className="text-white/80 text-sm space-y-1">
                      <p>Teléfono: +51 957 194 775</p>
                      <p>Correo: tecnico@lcfasteners.com</p>
                    </div>
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
