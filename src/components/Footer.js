import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jrbeduardo",
      label: "LinkedIn",
      color: "hover:text-primary"
    },
    {
      icon: FaGithub,
      href: "https://github.com/jrbeduardo",
      label: "GitHub",
      color: "hover:text-primary"
    },
    {
      icon: FaEnvelope,
      href: "mailto:jrbeduardo@gmail.com",
      label: "Email",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="bg-blue-steel/30 border-t border-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Logo/Name */}
          <div className="text-center">
            <Link 
              to="/"
              className="text-2xl font-semibold text-text-primary hover:text-primary transition-colors duration-200"
            >
              Eduardo Barrios
            </Link>
            <p className="text-sm text-text-secondary mt-2">
              Ingeniero de Datos & Desarrollador Full Stack
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              to="/" 
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link 
              to="/proyectos" 
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Proyectos
            </Link>
            <Link 
              to="/experiencia" 
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Experiencia
            </Link>
            <Link 
              to="/cursos" 
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Cursos
            </Link>
            <Link 
              to="/contacto" 
              className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Contacto
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-text-secondary hover:text-primary transition-colors duration-200`}
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-primary/20 w-full">
            <p className="text-sm text-text-secondary/70">
              © {currentYear} Eduardo Barrios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};