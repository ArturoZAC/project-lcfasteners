import { Container } from "../../../ui/Container";

export const OpenStandards = () => {
  const principles = [
    "Transparencia técnica",
    "Neutralidad de marca",
    "Evaluación basada en mérito técnico verificable",
    "Libre competencia y no discriminación",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna de imágenes */}
          <div className="order-1 lg:order-1">
            <div className="flex flex-col gap-4">
              {/* Imagen 1 - Rollo de material */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800"
                  alt="Material metálico enrollado"
                  className="w-full h-64 md:h-72 object-cover"
                />
              </div>
              {/* Imagen 2 - Equipo industrial */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800"
                  alt="Equipo de pruebas industrial"
                  className="w-full h-64 md:h-72 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Columna de texto */}
          <div className="order-2 lg:order-2">
            {/* Título */}
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Normas abiertas, mérito técnico y libre competencia
            </h3>

            {/* Párrafo principal */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Las soluciones técnicas desarrolladas y suministradas por LC Fasteners se alinean con
              los principios internacionalmente reconocidos de normalización, conforme a la Decisión
              sobre Principios para la Elaboración de Normas, Guías y Recomendaciones
              Internacionales del Comité de Obstáculos Técnicos al Comercio (OTC) de la Organización
              Mundial del Comercio.
            </p>

            {/* Introducción a badges */}
            <p className="text-gray-900 font-semibold text-lg mb-4">Este enfoque promueve:</p>

            {/* Badges en lugar de lista */}
            <div className="flex flex-wrap gap-3 mb-6">
              {principles.map((principle, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {principle}
                </span>
              ))}
            </div>

            {/* Texto de cierre */}
            <div className="bg-white border-l-4 border-gray-800 p-5 rounded-r">
              <p className="text-gray-800 font-medium text-base leading-relaxed">
                En concordancia con el Acuerdo TBT, se evita cualquier forma de exclusividad técnica
                no sustentada o restricción artificial del mercado.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
