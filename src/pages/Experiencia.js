import React from "react";
import { useScroll } from '../hooks/useScroll';

export const Experiencia = () => {
  useScroll();

  const experiences = [
    {
      id: 1,
      period: "AGO 2024 - ENE 2025",
      title: "Ayudante de Profesor de Asignatura Nivel B",
      company: "Facultad de Ciencias UNAM",
      type: "education",
      description: "Asignaturas impartidas:",
      details: [
        "Proyecto I Clasificación de Imágenes con redes neuronales, Grupo 6018, semestre 2025-I."
      ]
    },
    {
      id: 2,
      period: "MAR 2022 - OCT 2024",
      title: "Ingeniero de Datos",
      company: "Grupo Coppel",
      type: "work",
      description: "Mis actividades en grupo Coppel suelen incluir:",
      details: [
        "Recolección de datos de diversas fuentes de información, como bases de datos, archivos CSV, API web y más.",
        "Despliegue e integración de modelos matemáticos mediante el desarrollo de aplicativos para el uso de Grupo Coppel.",
        "Participación en la elaboración de arquitecturas que almacenan modelos analíticos en ambientes de desarrollo, pruebas y producción.",
        "Generación de procesos de ETL y automatización de procesos, construyendo pipelines automatizados para mover y procesar datos de manera eficiente."
      ]
    },
    {
      id: 3,
      period: "SEP 2021 - OCT 2021",
      title: "Becario Digitalent",
      company: "Unilever",
      type: "work",
      description: "Participación en el programa Digitalent by Unilever en el cual se desarrolló el proyecto Automatización Save to Invest",
      details: []
    },
    {
      id: 4,
      period: "ABR 2021 - JUN 2021",
      title: "Desarrollador Web Scraper",
      company: "OBLEK",
      type: "work",
      description: "Extracción y recopilación de información de forma automática de la Web. Implementación de algoritmos en Python para el mantenimiento de software.",
      details: []
    },
    {
      id: 5,
      period: "2018 - 2020",
      title: "Profesor de Tiempo Determinado",
      company: "Departamento de Matemáticas UAM-I",
      type: "education",
      description: "Asignaturas impartidas:",
      details: [
        "Precálculo, Grupo BA02, trimestre 2018-O.",
        "Álgebra Lineal Aplicada I, Grupo CC51, trimestre 2019-I.",
        "Álgebra Lineal Aplicada I, Grupo CC03, trimestre 2020-I.",
        "Cálculo Integral, Grupo CB51, trimestre 2020-I."
      ]
    },
    {
      id: 6,
      period: "2018",
      title: "Profesor de Asignatura",
      company: "Plantel del Valle UACM",
      type: "education",
      description: "Asignaturas impartidas:",
      details: [
        "Cálculo Diferencial, Grupo 403, semestre 2018-II."
      ]
    },
    {
      id: 7,
      period: "2010 - 2013",
      title: "Ayudante de Profesor de Asignatura Nivel B",
      company: "Facultad de Ciencias UNAM",
      type: "education",
      description: "Asignaturas impartidas:",
      details: [
        "Álgebra Superior II, Grupo 4039, semestre 2010-2.",
        "Álgebra Superior I, Grupo 4003, semestre 2012-1.",
        "Álgebra Superior II, Grupo 4034, semestre 2012-1.",
        "Álgebra Superior II, Grupo 4042, semestre 2012-2."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Mi{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experiencia
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Mi trayectoria profesional como Ingeniero de Datos, desarrollador y docente universitario.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start">
                  {/* Timeline dot - Hidden on mobile */}
                  <div className={`absolute left-2 sm:left-6 w-4 h-4 rounded-full border-2 border-blue-steel ${
                    exp.type === 'work' ? 'bg-primary' : 'bg-text-secondary'
                  } shadow-sm hidden sm:block`}></div>
                  
                  {/* Content */}
                  <div className="w-full sm:ml-16 bg-blue-steel/50 border border-primary/20 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-200 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="text-xl font-semibold text-text-primary">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg text-text-secondary mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-text-secondary/70 font-medium">
                          {exp.period}
                        </p>
                      </div>
                      <div className={`mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'work' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-text-secondary/20 text-text-secondary'
                      }`}>
                        {exp.type === 'work' ? 'Trabajo' : 'Educación'}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.details.length > 0 && (
                      <ul className="space-y-2">
                        {exp.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-text-secondary flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-8">
            Resumen de Competencias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Ingeniería de Datos</h3>
              <p className="text-sm text-text-secondary">+3 años de experiencia en pipelines ETL, arquitecturas de datos y automatización</p>
            </div>
            
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Docencia Universitaria</h3>
              <p className="text-sm text-text-secondary">+10 años enseñando matemáticas, programación e inteligencia artificial</p>
            </div>
            
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Desarrollo Full Stack</h3>
              <p className="text-sm text-text-secondary">Experiencia en Python, React, Django y desarrollo de aplicaciones web</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};