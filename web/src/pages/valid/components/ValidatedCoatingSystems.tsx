import { Container } from "../../../ui/Container";
import image from "../../../assets/valid/sistemas-de-reve.webp";

export const ValidatedCoatingSystems = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        {/* Título centrado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Sistemas de Revestimiento Validados
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Selección técnica basada en normativa internacional y desempeño funcional.
          </p>
        </div>

        {/* Texto descriptivo - AHORA ANTES DE LA IMAGEN */}
        <div className="max-w-4xl mx-auto text-gray-600 text-base leading-relaxed mb-12">
          <p className="mb-6">
            Los sistemas se seleccionan y validan exclusivamente bajo norma, no por marca comercial.
          </p>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li>
              • <strong>Zinc / Aluminio Flake Coating</strong> <br />
              <span className="text-gray-600">(ASTM F3393 / ISO 10683)</span>
            </li>

            <li>
              • <strong>Fluorosilicona</strong> <br />
              <span className="text-gray-600">
                Bajo coeficiente de fricción – color identificación <strong>ROJO</strong>
              </span>
            </li>

            <li>
              • <strong>Fluororesina</strong> <br />
              <span className="text-gray-600">
                Alta resistencia química – color identificación <strong>VERDE</strong>
              </span>
            </li>
          </ul>
        </div>

        {/* Imagen - AHORA DESPUÉS DEL TEXTO */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Sistemas de revestimiento validados"
            className="w-full max-w-3xl object-cover rounded-xl shadow-md"
          />
        </div>
      </Container>
    </section>
  );
};
