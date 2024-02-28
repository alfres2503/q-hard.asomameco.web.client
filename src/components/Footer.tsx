import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="grid items-center justify-center gap-4 min-h-[200px] px-4 py-4 text-center md:gap-6 md:px-6 md:grid-cols-2 lg:min-h-[100px]">
        <p className="text-sm text-gray-400">
          © {currentYear} Asomameco. Todos los derechos reservados.
        </p>
        <nav className="flex items-center justify-center space-x-4 text-sm">
          <Link className="text-gray-400" href="/">
            Inicio
          </Link>
          <Link className="text-gray-400" href="/about">
            Acerca de
          </Link>
          <Link className="text-gray-400" href="/events">
            Eventos
          </Link>
          <Link className="text-gray-400" href="/contact">
            Contacto
          </Link>
          <Link className="text-gray-400" href="/login">
            Ingresar
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
