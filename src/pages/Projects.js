import React from "react";
import { projectsData } from '../resources/projects';
import { useScroll } from "../hooks/useScroll";

export const Projects = () => {
  useScroll();

  const openProject = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="projects" className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Mis{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Proyectos
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
            análisis de datos y soluciones tecnológicas.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className="group bg-blue-steel/40 border border-primary/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/25 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:bg-blue-steel/60"
              >
                {/* Project Header */}
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-4 border-b border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        {/* Project Type Icon */}
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                          {project.category === 'web' && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          )}
                          {project.category === 'data' && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )}
                          {project.category === 'ai' && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          )}
                          {(!project.category || project.category === 'other') && (
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300 break-words">
                            {project.title}
                          </h3>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-12 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.link 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-secondary/20 text-secondary border border-secondary/30'
                    }`}>
                      {project.link ? 'Público' : 'Privado'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-text-primary mb-3">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg text-text-primary hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Project Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    {project.link ? (
                      <button
                        onClick={() => openProject(project.link)}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/30 hover:border-primary/50 rounded-lg text-sm font-medium text-primary transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver proyecto
                      </button>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg text-sm font-medium text-text-secondary/70">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-4h6m2 4H3m2-4v4m0-4V9a2 2 0 012-2h8a2 2 0 012 2v8m-6 4v-4m0 0h-6v4" />
                        </svg>
                        Proyecto corporativo
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-12">
            Tecnologías Utilizadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Lenguajes & Frameworks',
                technologies: ['Python', 'JavaScript', 'React', 'Flask', 'Django', 'FastAPI'],
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                category: 'Data & Analytics',
                technologies: ['PySpark', 'Pandas', 'Scikit-learn', 'Machine Learning', 'R', 'Tableau'],
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                category: 'Bases de Datos & DevOps',
                technologies: ['PostgreSQL', 'SQL', 'SQLite', 'Docker', 'PostGIS', 'GeoPandas'],
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                )
              }
            ].map((group, index) => (
              <div key={index} className="bg-blue-steel/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg text-text-primary hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Technologies */}
          <div className="mt-12">
            <h3 className="text-xl font-light text-primary mb-6">Otras Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Selenium', 'Scrapy', 'APIs', 'Web Scraping', 'Data Analysis', 'HTML/CSS', 'Levenshtein'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-sm bg-blue-steel/50 border border-primary/30 rounded-full text-text-secondary hover:border-primary hover:text-primary hover:bg-blue-steel/70 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-steel/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-steel/60 to-blue-steel/40 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                ¿Tienes un proyecto en{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  mente?
                </span>
              </h2>
              
              <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Me encantaría colaborar contigo en tu próximo proyecto de datos, desarrollo web o inteligencia artificial. 
                Convirtamos tus ideas en realidad.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="mailto:jrbeduardo@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-blue font-semibold rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Iniciar conversación
              </a>
              
              <a 
                href="https://github.com/jrbeduardo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark-blue transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver más en GitHub
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-primary/20">
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">jrbeduardo@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </div>
              
              <div className="flex items-center gap-2 text-text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Respuesta en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};