import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useScroll } from "../hooks/useScroll";

export const Contact = () => {
  useScroll();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="pt-20 pb-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-3xl font-light text-center text-white mb-6">
            Conectemos
          </h1>
          <p className="text-lg md:text-base text-center text-slate-300 max-w-2xl mx-auto font-light">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center">
          
          <div className="grid grid-cols-1 gap-6 mb-16">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaEnvelope className="text-slate-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-slate-800 mb-1">Email</h3>
                  <a href="mailto:jrbeduardo@gmail.com" className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-lg">
                    jrbeduardo@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaLinkedin className="text-slate-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-slate-800 mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/in/jrbeduardo" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-lg">
                    linkedin.com/in/jrbeduardo
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaGithub className="text-slate-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-slate-800 mb-1">GitHub</h3>
                  <a href="https://github.com/jrbeduardo" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-lg">
                    github.com/jrbeduardo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 mb-16">
            <h3 className="text-2xl font-light text-slate-800 mb-6">Currículum</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Descarga mi CV para conocer más detalles sobre mi experiencia y habilidades profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://drive.google.com/file/d/1bSd8yliyqZK8bH8osDhZNm1SepAoz4rf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className='bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 text-lg flex items-center gap-2'>
                  <FaDownload className="text-sm" />
                  CV Español
                </button>
              </a>
              <a href="https://drive.google.com/file/d/1bSd8yliyqZK8bH8osDhZNm1SepAoz4rf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className='bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 text-lg flex items-center gap-2'>
                  <FaDownload className="text-sm" />
                  CV English
                </button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-light text-slate-800 mb-2 text-center">
                Ubicación
              </h3>
              <p className="text-slate-600 text-center mb-6">
                Ciudad de México, México
              </p>
            </div>
            <div className="h-80">
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
