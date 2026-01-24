import { Container } from "../../../ui/Container";
import { IconMail, IconPhone /* IconMapPin */ } from "@tabler/icons-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí manejas el envío del formulario
    console.log(formData);
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Columna Izquierda - Info de Contacto */}
          <div className="bg-navy-hover text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contacto Técnico
              <br />y Comercial
            </h2>

            <p className="text-gray-300 mb-8">
              Soporte especializado para el cumplimiento normativo en proyectos de infraestructura y
              minería.
            </p>

            {/* Información de Contacto */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Escríbanos</p>
                  <a
                    href="mailto:tecnico@lcfasteners.com"
                    className="text-white hover:text-gray-300 transition"
                  >
                    tecnico@lcfasteners.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Línea Directa
                  </p>
                  <a href="tel:+5112345678" className="text-white hover:text-gray-300 transition">
                    +51 957 194 775
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-white">Lima, Perú | Planta LATAM</p>
                </div>
              </div> */}
            </div>

            {/* Imagen decorativa */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="Productos industriales"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíenos su Requerimiento</h3>
              <p className="text-gray-600">
                Complete el formulario para recibir asesoría técnica personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Empresa */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de su organización"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Email y Teléfono */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jperez@empresa.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 900 000 000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describa su requerimiento técnico o consulta sobre productos..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  required
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-gray-500 transition flex items-center justify-center gap-2"
              >
                ENVIAR CONSULTA
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 italic">
                La información enviada será tratada bajo estrictos protocolos de confidencialidad
                técnica B2B. Al enviar este formulario, usted acepta nuestra política de gestión de
                datos industriales.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
