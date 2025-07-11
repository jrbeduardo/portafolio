import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { useScroll } from "../hooks/useScroll";
import { CVDownload } from "../components/CVDownload";

export const Contact = () => {
  useScroll();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const contactMethods = [
    {
      id: 1,
      icon: FaEnvelope,
      label: "Email",
      value: "jrbeduardo@gmail.com",
      href: "mailto:jrbeduardo@gmail.com",
      description: "La mejor forma de contactarme"
    },
    {
      id: 2,
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jrbeduardo",
      href: "https://linkedin.com/in/jrbeduardo",
      description: "Conectemos profesionalmente"
    },
    {
      id: 3,
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/jrbeduardo",
      href: "https://github.com/jrbeduardo",
      description: "Revisa mi código y proyectos"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Hablemos{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              juntos
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo y discutir 
            cómo podemos trabajar juntos.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-blue-steel/50 border border-primary/20 rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {method.label}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {method.description}
                    </p>
                    <p className="text-primary font-medium group-hover:underline">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-6">
            Currículum Vitae
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Descarga mi CV para conocer más detalles sobre mi experiencia profesional 
            y habilidades técnicas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsCVModalOpen(true)}
              className="btn-primary hover-gradient"
            >
              <FaDownload className="mr-2 w-4 h-4" />
              Descargar CV
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary mb-4">
              Ubicación
            </h2>
            <div className="flex items-center justify-center text-text-secondary">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 text-primary" />
              <span>Ciudad de México, México</span>
            </div>
          </div>
          
          <div className="bg-blue-steel/50 rounded-lg border border-primary/20 overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="w-full h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240865.66325882063!2d-99.41543239074369!3d19.390519011860457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1648584726000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ciudad de México"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-6">
            ¿Listo para colaborar?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Si tienes un proyecto interesante en mente, no dudes en contactarme. 
            Me encanta trabajar en desafíos que combinen datos, tecnología y creatividad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:jrbeduardo@gmail.com"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-dark-blue bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Enviar mensaje
            </a>
            <a 
              href="https://linkedin.com/in/jrbeduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark-blue transition-colors duration-200"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CV Download Modal */}
      <CVDownload 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </div>
  );
};