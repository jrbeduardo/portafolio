import {
  FaJava,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
} from "react-icons/si";
import AOS from "aos";
import TypewriterComponent from "typewriter-effect";
import { useScroll } from "../hooks/useScroll";
AOS.init({
  duration: 1000,
});

export const Home = () => {
  useScroll();
  return (
    <div className="grid grid-cols-1">
      {/* intro section */}
      <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="flex md:flex-col justify-evenly sm:justify-start sm:items-start h-screen items-center border-4 border-white rotate-12  mx-10 bg-gradient-to-br from-slate-900 to-slate-800 md:rotate-0 md:border-0">
          <div className="h-3/5 md:2/5 flex justify-center items-center">
            <img src="/fot.png" alt="Eduardo Barrios" className="w-64 h-64 object-cover object-[center_1%] rounded-full border-4 border-white shadow-lg" />
          </div>
          <div className="font-bold text-white md:px-2.5 border-y-white">
            <h1 className="text-5xl md:text-4xl">
              Hola, soy <b className="text-blue-accent ">Eduardo Barrios</b>
            </h1>

            <h2 className="text-4xl md:text-3xl text-blue-accent sm:text-9xl">
              <TypewriterComponent
                options={{
                  strings: [
                    "Matemático",
                    "e<sup> i π</sup> + 1 = 0",
                    "Programador",
                    '<code>print("hola Mundo")</code>',
                    "y profesor",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,

                }}
              />
            </h2>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="mt-20 md:mt-10 md:mx-2.5 mx-14 text-xl font-raleway flex flex-col justify-center">
        <h2
          className="text-4xl text-center font-bold my-10 mt-0 text-blue-corporate"
        >
          Perfil Profesional
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-gray-charcoal">
          <p className="text-xl md:text-lg leading-relaxed">
            <strong>Ingeniero de Datos</strong> con sólida formación matemática y más de 2 años de experiencia 
            en el sector corporativo. Maestro en Matemáticas por la UNAM con amplia experiencia en docencia 
            universitaria y desarrollo de soluciones tecnológicas.
          </p>
          
          <p className="text-xl md:text-lg leading-relaxed">
            Mi experiencia en <strong>Grupo Coppel</strong> como Ingeniero de Datos me ha permitido desarrollar 
            expertise en recolección, procesamiento y análisis de grandes volúmenes de datos, diseño de 
            arquitecturas escalables, y desarrollo de pipelines ETL automatizados. He trabajado con diversas 
            fuentes de datos incluyendo bases de datos relacionales, archivos CSV, APIs web y sistemas distribuidos.
          </p>
          
          <p className="text-xl md:text-lg leading-relaxed">
            Como <strong>desarrollador Full Stack</strong>, domino tecnologías modernas tanto en frontend 
            (React, JavaScript, HTML/CSS) como en backend (Python, Node.js, Django, Flask). Mi enfoque se 
            centra en crear soluciones robustas y escalables que integren análisis de datos con interfaces 
            de usuario intuitivas.
          </p>
          
          <p className="text-xl md:text-lg leading-relaxed">
            En el ámbito académico, he sido <strong>profesor universitario</strong> en instituciones como 
            UNAM, UAM-I y UACM, impartiendo asignaturas de matemáticas avanzadas, álgebra lineal y cálculo. 
            Actualmente soy ayudante de profesor en la Facultad de Ciencias de la UNAM, enseñando 
            clasificación de imágenes con redes neuronales.
          </p>
          
          <div className="bg-bg-light p-6 rounded-lg border-l-4 border-blue-corporate">
            <h3 className="text-lg font-bold mb-3 text-blue-corporate">Áreas de Especialización:</h3>
            <ul className="text-lg md:text-base space-y-2 text-gray-charcoal">
              <li>• <strong>Ingeniería de Datos:</strong> ETL, Data Warehousing, Big Data, Pipelines automatizados</li>
              <li>• <strong>Ciencia de Datos:</strong> Machine Learning, Análisis estadístico, Visualización de datos</li>
              <li>• <strong>Desarrollo Full Stack:</strong> Python, JavaScript, React, Django, APIs REST</li>
              <li>• <strong>Docencia Universitaria:</strong> Matemáticas, Estadística, Programación, IA</li>
            </ul>
          </div>
          
          <p className="text-lg md:text-base text-gray-medium italic text-center">
            Buscando oportunidades para aplicar mi experiencia en proyectos desafiantes que combinen 
            análisis de datos, desarrollo de software y transferencia de conocimiento.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-20 md:mt-10 md:mx-2.5 mx-14 text-xl font-raleway flex flex-col justify-center">
        <h2 className="text-4xl text-center font-bold my-10 mt-0 text-blue-corporate">
          Habilidades Técnicas
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          
          {/* Lenguajes de Programación */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Lenguajes de Programación
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <div className="flex items-center space-x-2">
                <FaPython size={20} className="text-blue-500" />
                <span className="font-medium">Python</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaJava size={20} className="text-orange-500" />
                <span className="font-medium">Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 bg-gray-600 rounded text-white text-xs flex items-center justify-center font-bold">C</span>
                <span className="font-medium">C</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">R</span>
                <span className="font-medium">R</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhp size={20} className="text-purple-600" />
                <span className="font-medium">PHP</span>
              </div>
              <div className="flex items-center space-x-2">
                <SiJavascript size={20} className="text-yellow-500" />
                <span className="font-medium">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Herramientas y Frameworks */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Herramientas y Frameworks
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <span className="block">• Flask, Django, FastAPI</span>
              <span className="block">• Jupyter Notebooks</span>
              <span className="block">• PySpark</span>
              <span className="block">• R/RStudio</span>
              <span className="block">• React/Node.js</span>
              <span className="block">• Bootstrap/Tailwind</span>
              <span className="block">• HTML/CSS</span>
              <span className="block">• Docker</span>
              <span className="block">• Git/GitHub/GitLab</span>
              <span className="block">• LaTeX</span>
              <span className="block">• Power BI</span>
            </div>
          </div>

          {/* Bases de Datos */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Bases de Datos
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <div>
                <span className="font-semibold text-green-professional">SQL:</span>
                <span className="block ml-4">• Oracle</span>
                <span className="block ml-4">• MySQL</span>
                <span className="block ml-4">• PostgreSQL</span>
              </div>
              <div className="mt-3">
                <span className="font-semibold text-green-professional">NoSQL:</span>
                <span className="block ml-4">• MongoDB (básico)</span>
              </div>
            </div>
          </div>

          {/* Servicios de Nube */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Servicios de Nube
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <span className="block">• Google Cloud Platform (básico)</span>
              <span className="block">• Microsoft Azure (básico)</span>
            </div>
          </div>

          {/* Sistemas Operativos */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Sistemas Operativos
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <span className="block">• Windows</span>
              <span className="block">• Linux (Debian, Ubuntu, Linux Mint)</span>
            </div>
          </div>

          {/* Idiomas */}
          <div className="bg-bg-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-corporate border-b-2 border-blue-corporate pb-2">
              Idiomas
            </h3>
            <div className="space-y-2 text-gray-charcoal">
              <span className="block"><strong>Español:</strong> Nativo</span>
              <span className="block"><strong>Inglés:</strong> B1 (Marco Común Europeo)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
