import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Container } from "../../../ui/Container";
import estabilidad02 from "../../../assets/valid/part1.webp";
import estabilidad03 from "../../../assets/valid/part2.webp";

export const CorrosionDurability = () => {
  const standards = [
    {
      title: "ASTM F3393",
      // description: "Validación de sistemas Zinc / Aluminio Flake bajo condiciones controladas.",
    },
    {
      title: "ISO 10683",
      // description: "Requisitos de desempeño para recubrimientos no electrolíticos.",
    },
    {
      title: "ASTM B117",
      // description: "Ensayo de niebla salina para evaluación de resistencia a la corrosión.",
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
              Corrosión y Durabilidad
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {/* Los sistemas de revestimiento se validan según condiciones reales de servicio, */}
              {/* evaluando su comportamiento frente a ambientes corrosivos severos.  */}
              Validación bajo condiciones controladas y evaluación frente a ambientes corrosivos
              severos.
            </p>

            {/* Lista de normas / checks */}
            <div className="space-y-4">
              {standards.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <IconCircleCheckFilled className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-gray-900 font-bold mb-1">{item.title}</h3>
                    {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de galería desequilibrada */}
          <div className="relative h-125">
            {/* Imagen superior izquierda */}
            <div className="absolute top-0 left-0 w-2/3">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-64">
                <img
                  src={estabilidad02}
                  alt="Ensayos de corrosión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Imagen inferior derecha */}
            <div className="absolute bottom-0 right-0 w-2/3">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-72">
                <img
                  src={estabilidad03}
                  alt="Durabilidad del revestimiento"
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
