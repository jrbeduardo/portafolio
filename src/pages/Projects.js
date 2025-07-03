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
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => {
            // Define color themes for each project
            const colorThemes = [
              {
                bg: 'bg-gradient-to-br from-cyan-50 to-blue-100',
                border: 'border-cyan-200',
                accent: 'bg-cyan-500',
                titleColor: 'text-cyan-900',
                descColor: 'text-cyan-700',
                btn: 'text-cyan-600 hover:text-cyan-800 border-cyan-600 hover:border-cyan-800 hover:bg-cyan-50'
              },
              {
                bg: 'bg-gradient-to-br from-orange-50 to-red-100',
                border: 'border-orange-200',
                accent: 'bg-orange-500',
                titleColor: 'text-orange-900',
                descColor: 'text-orange-700',
                btn: 'text-orange-600 hover:text-orange-800 border-orange-600 hover:border-orange-800 hover:bg-orange-50'
              },
              {
                bg: 'bg-gradient-to-br from-green-50 to-emerald-100',
                border: 'border-green-200',
                accent: 'bg-green-500',
                titleColor: 'text-green-900',
                descColor: 'text-green-700',
                btn: 'text-green-600 hover:text-green-800 border-green-600 hover:border-green-800 hover:bg-green-50'
              },
              {
                bg: 'bg-gradient-to-br from-indigo-50 to-purple-100',
                border: 'border-indigo-200',
                accent: 'bg-indigo-500',
                titleColor: 'text-indigo-900',
                descColor: 'text-indigo-700',
                btn: 'text-indigo-600 hover:text-indigo-800 border-indigo-600 hover:border-indigo-800 hover:bg-indigo-50'
              },
              {
                bg: 'bg-gradient-to-br from-pink-50 to-rose-100',
                border: 'border-pink-200',
                accent: 'bg-pink-500',
                titleColor: 'text-pink-900',
                descColor: 'text-pink-700',
                btn: 'text-pink-600 hover:text-pink-800 border-pink-600 hover:border-pink-800 hover:bg-pink-50'
              },
              {
                bg: 'bg-gradient-to-br from-teal-50 to-cyan-100',
                border: 'border-teal-200',
                accent: 'bg-teal-500',
                titleColor: 'text-teal-900',
                descColor: 'text-teal-700',
                btn: 'text-teal-600 hover:text-teal-800 border-teal-600 hover:border-teal-800 hover:bg-teal-50'
              },
              {
                bg: 'bg-gradient-to-br from-amber-50 to-yellow-100',
                border: 'border-amber-200',
                accent: 'bg-amber-500',
                titleColor: 'text-amber-900',
                descColor: 'text-amber-700',
                btn: 'text-amber-600 hover:text-amber-800 border-amber-600 hover:border-amber-800 hover:bg-amber-50'
              }
            ];
            
            const theme = colorThemes[index % colorThemes.length];
            
            return (
              <div 
                key={project.title} 
                className={`${theme.bg} border ${theme.border} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="relative">
                  <div className={`absolute top-0 left-0 w-full h-1 ${theme.accent} rounded-t-xl`}></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 ${theme.accent} rounded-full mt-2 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${theme.titleColor} mb-4`}>
                          {project.title}
                        </h3>
                        <p className={`${theme.descColor} text-base leading-relaxed mb-8`}>
                          {project.description}
                        </p>
                        <div className="flex justify-end">
                          <button 
                            onClick={() => window.open(project.link, '_blank')}
                            className={`inline-flex items-center px-6 py-3 text-sm font-semibold ${theme.btn} border-2 rounded-lg transition-all duration-200 hover:scale-105`}
                          >
                            Ver Proyecto
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
