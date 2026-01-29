import { Container } from "../../../ui/Container";
import image from "../../../assets/valid/ensayos-meca.webp";

export const MechanicalFunctionalTesting = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div>
            <div className="mb-6 border-l-4 border-navy pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                Ensayos Mecánicos y Funcionales
              </h2>
              <p className="text-gray-600 text-base">
                Validación técnica orientada a desempeño, seguridad y confiabilidad del ensamblaje.
              </p>
            </div>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>• Ensayo torque–tensión conforme ISO 16047</li>
              <li>• Verificación de coeficiente de fricción</li>
              <li>• Evaluación de repetibilidad y estabilidad de montaje</li>
              <li>• Validación de precarga conforme a clase de servicio</li>
            </ul>
          </div>

          {/* Imagen derecha */}
          <div className="w-full h-full">
            <img
              src={image}
              alt="Ensayos mecánicos y funcionales"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
