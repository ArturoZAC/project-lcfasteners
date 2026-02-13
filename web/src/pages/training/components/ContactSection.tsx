/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Container } from "../../../ui/Container";
import { IconMail, IconPhone /* IconMapPin */ } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchemaType } from "../schemas/contact.schema";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import { getEnvs } from "../../../helpers/getEnvs";
import { FormAlert } from "../utils/FormAlert";

// const { VITE_API_URL, VITE_RECAPTCHA_SITE_KEY } = getEnvs();

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactSchemaType) => {
    if (!captchaToken) {
      setAlert({ type: "warning", message: "Es necesario marcar el captcha" });
      return;
    }

    console.log({ data });

    setIsLoading(true);
    try {
      // const res = await fetch(`${VITE_API_URL}/enviar-contacto`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...data, captcha: captchaToken }),
      // });

      // if (!res.ok) throw new Error("Error al enviar el formulario");

      reset();
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setAlert({ type: "success", message: "Mensaje enviado con éxito" });
    } catch {
      setAlert({ type: "error", message: "Error al enviar el formulario" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Columna Izquierda - Info de Contacto con imagen de fondo */}
          <div
            className="relative text-white p-8 md:p-12"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay negro */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Contenido sobre el overlay */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contacto Técnico
                <br />y Comercial
              </h2>

              <p className="text-gray-300 mb-8">
                Soporte especializado para el cumplimiento normativo en proyectos de infraestructura
                y minería.
              </p>

              {/* Información de Contacto */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Escríbanos
                    </p>
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
                    <a
                      href="tel:+51957194775"
                      className="text-white hover:text-gray-300 transition"
                    >
                      +51 957 194 775
                    </a>
                  </div>
                </div>
              </div>
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
            {alert && <FormAlert type={alert.type} message={alert.message} />}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nombre y Empresa */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 mt-1 text-sm">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Nombre de su organización"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                  {errors.company && (
                    <p className="text-red-500 mt-1 text-sm">{errors.company.message}</p>
                  )}
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
                    {...register("email")}
                    placeholder="jperez@empresa.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+51 900 000 000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                  {errors.phone && (
                    <p className="text-red-500 mt-1 text-sm">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Describa su requerimiento técnico o consulta sobre productos..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* <div className="flex justify-center max-w-full">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token: any) => setCaptchaToken(token)}
                />
              </div> */}

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer w-full px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-gray-500 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2 justify-center">
                    {/* Spinner */}
                    <div className="w-5 h-5 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                  </div>
                ) : (
                  <>
                    ENVIAR CONSULTA
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 italic">
                La información será tratada bajo protocolos estrictos de confidencialidad técnica
                B2B.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
