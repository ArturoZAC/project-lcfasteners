import { IconAdjustmentsHorizontal, IconLayersIntersect2, IconSettings } from "@tabler/icons-react";
import { Container } from "../../../ui/Container";

import firstimage from "../../../assets/products/productoejemplo01.webp";
import secondimage from "../../../assets/products/product02.webp";

export const IndustrialFasteners = () => {
  const features = [
    {
      icon: IconLayersIntersect2,
      title: "Trazabilidad Total",
      description: "Control de lotes desde la colada de acero hasta el despacho final.",
      iconBg: "bg-blue-100",
      iconColor: "text-navy",
    },
    {
      icon: IconAdjustmentsHorizontal,
      title: "Control Dimensional",
      description: "Verificación micrométrica y tolerancias según normas internacionales.",
      iconBg: "bg-blue-100",
      iconColor: "text-navy",
    },
    {
      icon: IconSettings,
      title: "Propiedades Mecánicas",
      description: "Certificación de dureza, límite elástico y resistencia a la tracción.",
      iconBg: "bg-blue-100",
      iconColor: "text-navy",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div>
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Sujetadores Industriales y Cumplimiento ASTM/ISO
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Nuestra línea de pernería y sujetadores está fabricada bajo los parámetros más
              estrictos de ingeniería. Aseguramos la integridad estructural de sus proyectos
              mediante el cumplimiento riguroso de normativas internacionales como ASTM A193, A194 y
              ISO 898-1.
            </p>

            {/* Lista de características */}
            <div className="space-y-5">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icono */}
                    <div
                      className={`shrink-0 w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>

                    {/* Texto */}
                    <div>
                      <h3 className="text-lg font-bold text-black mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna de imágenes */}
          <div className="grid grid-cols-2 gap-4">
            {/* Imagen 1 - Tornillo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={secondimage}
                alt="Tornillo industrial hexagonal"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Imagen 2 - Placa metálica */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={firstimage}
                alt="Placa de montaje industrial"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
