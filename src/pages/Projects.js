import { projectsData } from '../resources/projects'
import { useScroll } from "../hooks/useScroll";

export const Projects = () => {
  useScroll();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 bg-gray-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-3xl font-bold text-center text-white mb-6">
            Proyectos
          </h1>
          <p className="text-lg md:text-base text-center text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
            análisis de datos y soluciones tecnológicas.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <div key={project.title} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-md hover:bg-blue-50 transition-colors duration-200"
                  >
                    Ver Proyecto
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
