import { Container } from "../../../ui/Container";

export const ValidationScope = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 border-l-4 border-navy pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Alcance de Validación</h2>
          <p className="text-gray-600 text-base">Ensayos y Validación Normativa</p>
        </div>

        {/* Contenido */}
        <div className="max-w-full">
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Todos los productos suministrados por <strong>LC Fasteners</strong> son evaluados bajo
            criterios técnicos objetivos, garantizando desempeño mecánico, compatibilidad de montaje
            y durabilidad en servicio.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Los ensayos se realizan conforme a normas internacionales vigentes y a las
            especificaciones contractuales aplicables.
          </p>
        </div>
      </Container>
    </section>
  );
};
