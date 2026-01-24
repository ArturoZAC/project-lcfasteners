import { Container } from "../../../ui/Container";

export const TechnicalApproach = () => {
  const targetAudience = [
    "Integridad mecánica",
    "Corrosión",
    "Instalación y montaje",
    "Aseguramiento y control de calidad",
    "Gestión de activos e infraestructura",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna de texto */}
          <div className="order-2 lg:order-1">
            {/* Etiqueta superior */}
            <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
              Enfoque Técnico Especializado
            </p>

            {/* Título */}
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Enfoque técnico y rol del soporte especializado
            </h3>

            {/* Párrafo 1 */}
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              LC Fasteners no opera como una plataforma de comercialización masiva de sujetadores.
              Su enfoque se basa en alinear requisitos legales, normativos y de desempeño,
              suministrando productos técnicamente definidos y soporte técnico integrado como parte
              natural del suministro.
            </p>

            {/* Párrafo 2 - Introducción a la lista */}
            <p className="text-gray-700 text-lg font-medium mb-4">
              Este enfoque está dirigido a responsables de:
            </p>

            {/* Lista de público objetivo */}
            <ul className="space-y-3">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-600 mr-3 mt-1 shrink-0">●</span>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de imagen */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1767588114207-85a196d8089e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Infraestructura industrial - Sistemas de almacenamiento"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
