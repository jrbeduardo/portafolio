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
              <div key={index} className="bg-blue-steel/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Icon based on category */}
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      {index === 0 && ( // Lenguajes de Programación
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {index === 1 && ( // Big Data & ETL
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      )}
                      {index === 2 && ( // Machine Learning
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {index === 3 && ( // Desarrollo Web
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )}
                      {index === 4 && ( // Bases de Datos
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      )}
                      {index === 5 && ( // DevOps
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-16 transition-all duration-300"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-3 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group-hover:shadow-md"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <span className="text-xs sm:text-sm font-medium text-text-primary hover:text-primary transition-colors duration-300 block text-center">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-primary mb-12 text-center">
            Experiencia Destacada
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coppel Experience */}
            <div className="bg-blue-steel/50 border border-primary/20 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col items-start gap-6">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg p-3 flex items-center justify-center shadow-sm">
                    <img 
                      src="Coppel_logo_(2025).png" 
                      alt="Coppel Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                      Ingeniero de Datos
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Grupo Coppel
                    </p>
                    <p className="text-sm text-text-secondary/70 font-medium">
                      Marzo 2022 - Octubre 2024
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-text-primary mb-3">
                      Responsabilidades Principales
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Recolección y procesamiento de datos de múltiples fuentes: bases de datos, APIs web, archivos CSV y sistemas legacy
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Despliegue e integración de modelos matemáticos en producción con Python y PySpark
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Desarrollo de arquitecturas de datos escalables para almacenar modelos analíticos en ambientes de desarrollo, pruebas y producción
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Construcción de pipelines ETL automatizados con Apache Airflow para optimizar flujos de datos
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Colaboración con equipos de análisis para implementar soluciones de inteligencia de negocios
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-text-primary mb-3">
                      Logros Destacados
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Procesamiento de más de 10M de registros diarios mejorando la eficiencia operativa
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Reducción del 40% en tiempo de procesamiento de datos mediante optimización de pipelines
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Implementación exitosa de 5+ modelos predictivos en producción
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* UNAM Experience */}
            <div className="bg-blue-steel/50 border border-primary/20 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col items-start gap-6">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg p-3 flex items-center justify-center shadow-sm">
                    <img 
                      src="/facultad-ciencias-unam-logo.svg" 
                      alt="Facultad de Ciencias UNAM" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                      Proyecto I - CNN
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Facultad de Ciencias UNAM
                    </p>
                    <p className="text-sm text-text-secondary/70 font-medium">
                      Semestre 2025-I • Grupo 6018
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-text-primary mb-3">
                      Descripción del Curso
                    </h4>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      Curso avanzado enfocado en el desarrollo de sistemas de clasificación de imágenes utilizando 
                      redes neuronales profundas. Los estudiantes aprenden a implementar, entrenar y optimizar 
                      modelos de deep learning para reconocimiento de patrones visuales.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-3">
                      Objetivos del Curso
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Implementar arquitecturas CNN para clasificación de imágenes
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Aplicar técnicas de preprocesamiento y data augmentation
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Desarrollar proyectos con TensorFlow/Keras
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Evaluar y optimizar modelos mediante métricas de rendimiento
                      </li>
                      <li className="text-sm text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Presentar resultados de manera profesional
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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