import { Container } from "../../../ui/Container";

export const InstitutionalDisclaimer = () => {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed italic border-l-4 border-gray-300 pl-4 [hyphens:none] [word-break:normal] wrap-normal">
            Sujetadores industriales y sistemas de revestimiento conforme a normas internacionales.
            La información publicada es referencial y no sustituye especificaciones contractuales.
          </p>
        </div>
      </Container>
    </section>
  );
};
