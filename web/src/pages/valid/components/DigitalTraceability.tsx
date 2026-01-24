import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

export const DigitalTraceability = () => {
  const features = [
    {
      title: "Mill Test Reports (MTR)",
      description: "Certificados de origen de la materia prima.",
    },
    {
      title: "Reportes de Inspección Final",
      description: "Resultados de los ensayos mecánicos y dimensionales.",
    },
    {
      title: "Historial de Recubrimientos",
      description: "Tiempos de proceso y espesores verificados.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div>
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trazabilidad Digital y Certificación
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              La trazabilidad incluye identificación por lote, registros de fabricación,
              certificados técnicos y, cuando aplica, verificación digital mediante códigos QR.
            </p>

            {/* Lista de características */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <IconCircleCheckFilled className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-gray-900 font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de galería desequilibrada */}
          <div className="relative h-125">
            {/* Imagen 1 - Arriba a la izquierda */}
            <div className="absolute top-0 left-0 w-2/3">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Certificación de calidad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Imagen 2 - Abajo a la derecha, offset */}
            <div className="absolute bottom-0 right-0 w-2/3">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-72">
                <img
                  src="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Documentación técnica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
