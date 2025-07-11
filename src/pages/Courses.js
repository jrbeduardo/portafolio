import React from "react";
import { coursesData } from "../resources/courses";
import { useScroll } from "../hooks/useScroll";

export const Courses = () => {
  useScroll();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-primary mb-6">
            Cursos
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Cursos universitarios que he impartido en matemáticas, programación e inteligencia artificial.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <div 
                key={index}
                className="bg-blue-steel/50 border border-primary/20 rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => openLink(course.link)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark-blue transition-colors duration-200"
                  >
                    {course.extraLink ? 'Ver Clases' : 'Ver Curso'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </button>
                  
                  {course.extraLink && (
                    <button
                      onClick={() => openLink(course.extraLink)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-text-secondary border border-primary/30 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      Ver Ayudantías
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-8">
            Filosofía Docente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Aprendizaje Práctico</h3>
              <p className="text-sm text-text-secondary">Enfoque en la aplicación práctica de conceptos teóricos a través de ejercicios y proyectos reales</p>
            </div>
            
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Aprendizaje Colaborativo</h3>
              <p className="text-sm text-text-secondary">Fomento del trabajo en equipo y la discusión grupal para enriquecer el aprendizaje</p>
            </div>
            
            <div className="bg-blue-steel/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Innovación Tecnológica</h3>
              <p className="text-sm text-text-secondary">Integración de herramientas modernas como Python, ML y visualización de datos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-12">
            Experiencia Docente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">+10</div>
              <div className="text-sm text-text-secondary">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">3</div>
              <div className="text-sm text-text-secondary">Universidades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">15+</div>
              <div className="text-sm text-text-secondary">Cursos impartidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">500+</div>
              <div className="text-sm text-text-secondary">Estudiantes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};