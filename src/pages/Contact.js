import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useScroll } from "../hooks/useScroll";

export const Contact = () => {
  useScroll();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 bg-gray-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-3xl font-bold text-center text-white mb-6">
            Contacto
          </h1>
          <p className="text-lg md:text-base text-center text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">
            Información de Contacto
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-accent p-4 rounded-full">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
                <a href="mailto:jrbeduardo@gmail.com" className="text-blue-accent hover:underline text-lg">
                  jrbeduardo@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-accent p-4 rounded-full">
                <FaLinkedin className="text-white text-3xl" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">LinkedIn</h3>
                <a href="https://linkedin.com/in/jrbeduardo" target="_blank" rel="noopener noreferrer" className="text-blue-accent hover:underline text-lg">
                  linkedin.com/in/jrbeduardo
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-accent p-4 rounded-full">
                <FaGithub className="text-white text-3xl" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">GitHub</h3>
                <a href="https://github.com/jrbeduardo" target="_blank" rel="noopener noreferrer" className="text-blue-accent hover:underline text-lg">
                  github.com/jrbeduardo
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-sm mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Descarga mi CV</h3>
            <p className="text-gray-600 mb-6">
              Obtén más detalles sobre mi experiencia y habilidades profesionales.
            </p>
            <a href="https://drive.google.com/file/d/1s99GQpOPuuzaHB8D_85czUrPSnUTdgqn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className='bg-blue-accent hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200 text-lg'>
                Descargar CV
              </button>
            </a>
          </div>

          {/* Map */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Ubicación
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Ciudad de México, México
              </p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240865.66325882063!2d-99.41543239074369!3d19.390519011860457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1648584726000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ciudad de México con zoom"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
