import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { CVDownload } from "../components/CVDownload";

export const Home = () => {
  useScroll();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const skills = [
    { category: "Lenguajes de Programación", items: ["Python", "JavaScript", "R", "Java", "C", "PHP"] },
    { category: "Big Data & ETL", items: ["PySpark", "Apache Spark", "ETL Pipelines", "Data Warehousing", "Apache Airflow"] },
    { category: "Machine Learning & Data Science", items: ["scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Desarrollo Web & APIs", items: ["Flask", "Django", "FastAPI", "React", "Node.js", "REST APIs"] },
    { category: "Bases de Datos", items: ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Data Modeling"] },
    { category: "DevOps & Herramientas", items: ["Docker", "Git", "Linux", "Power BI", "Google Cloud", "Azure"] }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-16 w-1 h-1 bg-primary rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-60 right-32 w-1 h-1 bg-primary rounded-full animate-ping opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Column */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6">
                <p className="text-primary font-medium text-sm sm:text-base mb-3 tracking-wide uppercase">
                  Eduardo Barrios
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                  Transformo datos en{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    decisiones inteligentes
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
                  Ingeniero de Datos especializado en arquitecturas escalables, modelos predictivos 
                  y automatización de pipelines. Convierto grandes volúmenes de información en 
                  soluciones que impulsan el crecimiento empresarial.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="bg-blue-steel/30 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3+</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Años optimizando datos</div>
                </div>
                <div className="bg-blue-steel/30 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Modelos en producción</div>
                </div>
                <div className="bg-blue-steel/30 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">10M+</div>
                  <div className="text-xs sm:text-sm text-text-secondary">Registros procesados</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a 
                  href="#projects"
                  className="btn-primary hover-gradient text-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Ver mis proyectos
                </a>
                <button 
                  onClick={() => setIsCVModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-dark-blue transition-all duration-300 transform hover:scale-105"
                >
                  Descargar CV
                </button>
              </div>

              {/* LinkedIn link */}
              <div className="text-center lg:text-left">
                <a 
                  href="https://www.linkedin.com/in/jrbeduardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Conectar en LinkedIn
                </a>
              </div>
            </div>

            {/* Image/Visual Column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile image with enhanced styling */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-blue-steel/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                    <img 
                      src="/fot.png" 
                      alt="Eduardo Barrios - Ingeniero de Datos" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating tech badges */}
                <div className="absolute -top-4 -right-4 bg-blue-steel/80 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-xs font-semibold text-primary">Python</span>
                </div>
                <div className="absolute bottom-8 -left-6 bg-blue-steel/80 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-xs font-semibold text-primary">TensorFlow</span>
                </div>
                <div className="absolute top-20 -left-8 bg-blue-steel/80 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-xs font-semibold text-primary">PySpark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-primary mb-8 text-center">
            Perfil Profesional
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-text-secondary leading-relaxed mb-6">
              <strong className="text-primary">Ingeniero de Datos</strong> con formación en Matemáticas (UNAM) y más de 3 años de experiencia 
              en retail. Especialista en arquitectura de datos, automatización de pipelines ETL y despliegue de modelos en producción. 
              Apasionado por generar valor mediante soluciones analíticas basadas en datos.
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Mi experiencia en <strong className="text-primary">Grupo Coppel</strong> como Ingeniero de Datos incluye recolección de datos 
              de diversas fuentes, despliegue e integración de modelos matemáticos, elaboración de arquitecturas para almacenar 
              modelos analíticos y generación de procesos ETL automatizados.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Como <strong className="text-primary">desarrollador Full Stack</strong> y con amplia experiencia en docencia universitaria, 
              combino conocimientos teóricos sólidos con aplicaciones prácticas en el desarrollo de soluciones tecnológicas robustas y escalables.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-primary mb-8 sm:mb-12 text-center px-4">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4 px-2">
                <h3 className="text-base sm:text-lg font-medium text-text-primary text-center sm:text-left">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm text-primary bg-primary/20 rounded-full border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-8">
            Experiencia Destacada
          </h2>
          <div className="bg-blue-steel/50 rounded-lg p-8 shadow-sm border border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <img 
                  src="Coppel_logo_(2025).png" 
                  alt="Coppel Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Ingeniero de Datos en Grupo Coppel
            </h3>
            <p className="text-text-secondary/70 mb-4">
              Marzo 2022 - Octubre 2024
            </p>
            <p className="text-text-secondary leading-relaxed">
              Recolección de datos de diversas fuentes, despliegue e integración de modelos matemáticos, 
              elaboración de arquitecturas para almacenar modelos analíticos en ambientes de desarrollo, 
              pruebas y producción, y generación de procesos ETL automatizados.
            </p>
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