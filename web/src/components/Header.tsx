import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../ui/Container";
import logo from "../assets/logo-v2.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/informativas/lcfasteners", label: "Inicio", end: true },
    { to: "modelo-gestion", label: "Modelo de Gestión" },
    { to: "productos", label: "Productos" },
    { to: "validacion-tecnica", label: "Validación Técnica" },
    // { to: "validacion-tecnica", label: "Ensayos & Trazabilidad" },
    { to: "capacitacion-tecnica", label: "Capacitación Técnica" },
  ];

  return (
    <header className="w-full bg-navy-hover shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo-lcfasteners" className="w-24" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors pb-1 border-b-2 ${
                    isActive
                      ? "text-white border-white"
                      : "text-zinc-400 border-transparent hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <IconMenu2 className="w-6 h-6" />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Sidebar - FULL WIDTH */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-navy-hover shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del sidebar con logo y botón X */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <img src={logo} alt="logo-lcfasteners" className="w-24" />
          <button
            onClick={closeMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Close menu"
          >
            <IconX className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors py-3 border-b border-zinc-700 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};
