import React from "react";
import { projectsData } from '../resources/projects';
import { useScroll } from "../hooks/useScroll";

export const Projects = () => {
  useScroll();

  const openProject = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-6 px-2">
            Proyectos
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
                className="group bg-blue-steel/50 border border-primary/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200 break-words">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      {project.technologies && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="inline-block px-2 py-1 text-xs text-primary bg-primary/20 rounded border border-primary/30 break-words"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    {project.link ? (
                      <button
                        onClick={() => openProject(project.link)}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        Ver proyecto
                        <svg 
                          className="ml-1 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </button>
                    ) : (
                      <span className="inline-flex items-center text-sm font-medium text-text-secondary/60">
                        Proyecto corporativo
                        <svg 
                          className="ml-1 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-4h6m2 4H3m2-4v4m0-4V9a2 2 0 012-2h8a2 2 0 012 2v8m-6 4v-4m0 0h-6v4" 
                          />
                        </svg>
                      </span>
                    )}
                    
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-8">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'PySpark', 'Flask', 'Django', 'FastAPI', 'React', 'JavaScript', 
              'Machine Learning', 'PostgreSQL', 'SQL', 'Docker', 'PostGIS', 'GeoPandas',
              'R', 'Tableau', 'Selenium', 'Scrapy', 'APIs', 'Web Scraping', 'Data Analysis',
              'Pandas', 'Scikit-learn', 'HTML/CSS', 'SQLite', 'Levenshtein'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-sm text-text-secondary bg-blue-steel/50 rounded-full border border-primary/30 hover:border-primary hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Me encantaría colaborar contigo en tu próximo proyecto de datos o desarrollo web.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:jrbeduardo@gmail.com"
              className="btn-primary hover-gradient"
            >
              Iniciar conversación
            </a>
            <a 
              href="https://github.com/jrbeduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark-blue transition-colors duration-200"
            >
              Ver más en GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};