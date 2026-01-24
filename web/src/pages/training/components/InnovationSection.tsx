import { Container } from "../../../ui/Container";

export const InnovationSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido de texto */}
          <div>
            {/* Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Investigación, Desarrollo
              <br />e Innovación (I+D+i)
            </h2>

            {/* Línea decorativa azul */}
            <div className="w-16 h-1 bg-navy mb-6"></div>

            {/* Descripción */}
            <p className="text-black text-base md:text-lg leading-relaxed mb-10">
              En LC Fasteners, la innovación no es un concepto abstracto, sino un pilar operativo.
              Nos enfocamos en la optimización de sistemas de sujeción y la adaptación de normas
              internacionales al contexto regional, asegurando que cada solución cumpla con los más
              altos estándares de seguridad y eficiencia.
            </p>

            {/* Dos columnas de características */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Optimización */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <h3 className="text-navy font-bold text-sm mb-3 uppercase tracking-wide">
                  Optimización
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  Mejora continua en procesos de recubrimiento y resistencia mecánica superior.
                </p>
              </div>

              {/* Adaptación */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <h3 className="text-navy font-bold text-sm mb-3 uppercase tracking-wide">
                  Adaptación
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  Alineación proactiva con las regulaciones industriales emergentes y retos
                  geográficos.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen con badge */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="Sistema de sujeción industrial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge de años innovando */}
            <div className="absolute bottom-6 left-6 bg-navy-hover text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">+15</div>
              <div className="text-xs uppercase tracking-wider">Años innovando</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
