import { Container } from "../../../ui/Container";

export const DocumentaryTraceability = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 border-l-4 border-navy pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Trazabilidad Técnica Documentada
          </h2>
          <p className="text-gray-600 text-base">
            {/* Control, registro y respaldo técnico verificable. */}
            Identificación por lote, control documental y certificación técnica conforme a norma
            internacional.
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-4xl text-navy text-base leading-relaxed mb-12">
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• Control por lote y colada de acero</li>
            <li>• Identificación de ensayos aplicados</li>
            <li>• Registro de resultados verificables</li>
            <li>• Respaldo técnico para auditorías y fiscalización</li>
          </ul>
        </div>

        {/* Pie de página */}
        <div className="border-t border-gray-200 pt-6 max-w-4xl text-gray-500 text-sm leading-relaxed">
          <p>
            <strong>
              Ensayos, validación técnica y trazabilidad conforme a normas internacionales.
            </strong>
          </p>
          <p className="mt-2">
            La información publicada es referencial y no sustituye especificaciones contractuales.
          </p>
        </div>
      </Container>
    </section>
  );
};
