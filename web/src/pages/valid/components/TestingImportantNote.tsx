import { IconArrowRight, IconInfoCircle } from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const TestingImportantNote = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="bg-white rounded-lg border-l-4 border-gray-400 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Contenido principal */}
            <div className="flex-1">
              {/* Título con icono */}
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-1">
                  <IconInfoCircle className="w-4 h-4 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Nota Importante: Ensayos de Campo vs. Laboratorio
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 text-base leading-relaxed pl-9">
                Es fundamental distinguir que los ensayos de laboratorio se realizan bajo
                condiciones controladas (ISO/IEC 17025), mientras que los de campo están sujetos a
                variables ambientales, de instalación y herramientas del sitio.
              </p>
            </div>

            {/* Botón CTA */}
            <div className="lg:shrink-0">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors group">
                Consultar guía técnica
                <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
