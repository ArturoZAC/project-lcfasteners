import { Container } from "../../../ui/Container";

export const CompanyTrajectory = () => {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Más de 27 años transformando el suministro tradicional en gestión técnica estructurada
          </h2>

          {/* Línea decorativa */}
          <div className="w-16 h-1 bg-navy mx-auto mb-8"></div>

          {/* Párrafo descriptivo */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Nuestra trayectoria en LATAM respalda un modelo de gestión robusto enfocado en sectores
            regulados, garantizando precisión técnica y cumplimiento normativo en cada etapa de la
            cadena de valor. No solo proveemos piezas; gestionamos integridad técnica.
          </p>
        </div>
      </Container>
    </section>
  );
};
