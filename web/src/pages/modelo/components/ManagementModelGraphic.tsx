import { Container } from "../../../ui/Container";
import modelGraphic from "../../../assets/modelo/grafico.webp";

export const ManagementModelGraphic = () => {
  return (
    <section className="w-full bg-white pb-16 md:pb-16">
      <Container>
        <div className="flex flex-col items-center text-center gap-y-8">
          {/* Imagen explicativa */}
          <div className="w-full flex justify-center">
            <img
              src={modelGraphic}
              alt="Modelo de gestión técnica basado en normas ASTM, ISO y ASME para sujetadores industriales."
              className="max-w-3xl w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Texto de apoyo con borde izquierdo */}
          <div className="lg:max-w-3xl text-left bg-gray-50 p-3 rounded-xl">
            <p className="text-gray-500 text-sm md:text-base italic border-l-4 border-navy pl-4 [hyphens:none] [word-break:normal] wrap-normal">
              El gráfico representa la estructura técnica bajo la cual LC Fasteners define, valida y
              suministra sujetadores industriales. Cada componente responde a criterios normativos,
              trazabilidad documental y mérito técnico verificable, sin exponer procedimientos,
              métodos ni parámetros de diseño.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
