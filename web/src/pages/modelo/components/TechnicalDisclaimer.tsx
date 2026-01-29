import { Container } from "../../../ui/Container";

export const TechnicalDisclaimer = () => {
  return (
    <section className="w-full bg-gray-50 py-10 md:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed italic border-l-4 border-gray-300 pl-4 [hyphens:none] [word-break:normal] wrap-normal">
            Las representaciones gráficas y descripciones contenidas en esta sección tienen carácter
            normativo y de gestión técnica. No constituyen procedimientos, métodos, parámetros
            operativos ni guías de diseño.
          </p>
        </div>
      </Container>
    </section>
  );
};
