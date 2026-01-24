import { Container } from "../ui/Container";
import { IconMailSpark, IconMapPin, IconPhone } from "@tabler/icons-react";
import logoFooter from "../assets/footerlogo.png";
import logoFooterPe from "../assets/logosPeru.webp";
import { Link } from "react-router-dom";

export const Footer = () => {
  const navLinks = [
    { to: "/informativas/lcfasteners", label: "Inicio" },
    { to: "modelo-gestion", label: "Modelo de Gestión" },
    { to: "productos", label: "Productos" },
    { to: "validacion-tecnica", label: "Ensayos & Trazabilidad" },
    { to: "capacitacion", label: "Capacitación Técnica" },
  ];
  return (
    <footer className="w-full bg-navy-hover text-gray-300">
      <Container className="py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-start">
              <img src={logoFooter} className="w-32" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 text-balance">
              Sujetadores industriales y sistemas de revestimiento conforme a normas
              internacionales. La información publicada es referencial y no sustituye
              especificaciones contractuales.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-navy flex items-center justify-center hover:bg-navy-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-navy flex items-center justify-center hover:bg-navy-600 transition"
              >
                <IconMailSpark className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONTACTO</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <IconMapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone className="w-5 h-5 shrink-0" />
                <a
                  href="tel:+51957194775"
                  className="hover:text-white transition whitespace-nowrap"
                >
                  +51 957 194 775
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconMailSpark className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:tecnico@lcfasteners.com"
                  className="hover:text-white transition whitespace-nowrap"
                >
                  tecnico@lcfasteners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 LC Fasteners & Coatings Branch LATAM S.A.C. Todos los derechos reservados.</p>
            <span className="flex flex-row gap-x-4">
              | Realizado por <img src={logoFooterPe} className="w-5" />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
