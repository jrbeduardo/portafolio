import { coursesData } from "../resources/courses";
import AOS from 'aos';
import { useScroll } from "../hooks/useScroll";
AOS.init({
  duration: 1000
});

export const Courses = () => {
  useScroll();
  return (
    <>
      <div>
        <div className="md:h-3/5 h-screen">
          <div className="h-4/5 md:h-3/5 bg-gradient-to-br from-slate-900 to-slate-800">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_xhfwgplf.json" 
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="relative">
          <svg className="absolute -top-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1440 320">
            <path fill="#0f172a" d="M0,96L26.7,90.7C53.3,85,107,75,160,101.3C213.3,128,267,192,320,229.3C373.3,267,427,277,480,261.3C533.3,245,587,203,640,192C693.3,181,747,203,800,213.3C853.3,224,907,224,960,224C1013.3,224,1067,224,1120,192C1173.3,160,1227,96,1280,85.3C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
          </svg>
      </div>
            
          </div>
      </div>
     
      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 gap-12">
          {coursesData.map((course, index) => {
            // Define color themes for each course
            const colorThemes = [
              {
                bg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
                border: 'border-blue-200',
                accent: 'bg-blue-500',
                titleColor: 'text-blue-900',
                descColor: 'text-blue-700',
                primaryBtn: 'text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 hover:bg-blue-50',
                secondaryBtn: 'text-indigo-600 hover:text-indigo-800 border-indigo-600 hover:border-indigo-800 hover:bg-indigo-50'
              },
              {
                bg: 'bg-gradient-to-br from-emerald-50 to-teal-100',
                border: 'border-emerald-200',
                accent: 'bg-emerald-500',
                titleColor: 'text-emerald-900',
                descColor: 'text-emerald-700',
                primaryBtn: 'text-emerald-600 hover:text-emerald-800 border-emerald-600 hover:border-emerald-800 hover:bg-emerald-50',
                secondaryBtn: 'text-teal-600 hover:text-teal-800 border-teal-600 hover:border-teal-800 hover:bg-teal-50'
              },
              {
                bg: 'bg-gradient-to-br from-purple-50 to-violet-100',
                border: 'border-purple-200',
                accent: 'bg-purple-500',
                titleColor: 'text-purple-900',
                descColor: 'text-purple-700',
                primaryBtn: 'text-purple-600 hover:text-purple-800 border-purple-600 hover:border-purple-800 hover:bg-purple-50',
                secondaryBtn: 'text-violet-600 hover:text-violet-800 border-violet-600 hover:border-violet-800 hover:bg-violet-50'
              }
            ];
            
            const theme = colorThemes[index % colorThemes.length];
            
            return (
              <div 
                key={course.title} 
                className={`${theme.bg} border ${theme.border} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="relative">
                  <div className={`absolute top-0 left-0 w-full h-1 ${theme.accent} rounded-t-xl`}></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 ${theme.accent} rounded-full mt-2 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${theme.titleColor} mb-4`}>
                          {course.title}
                        </h3>
                        <p className={`${theme.descColor} text-base leading-relaxed mb-8`}>
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button 
                            onClick={() => window.open(course.link, '_blank')}
                            className={`inline-flex items-center px-6 py-3 text-sm font-semibold ${theme.primaryBtn} border-2 rounded-lg transition-all duration-200 hover:scale-105`}
                          >
                            {course.extraLink ? 'Clases' : 'Ver Curso'}
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                          {course.extraLink && (
                            <button 
                              onClick={() => window.open(course.extraLink, '_blank')}
                              className={`inline-flex items-center px-6 py-3 text-sm font-semibold ${theme.secondaryBtn} border-2 rounded-lg transition-all duration-200 hover:scale-105`}
                            >
                              Ayudantías
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </button>
                          )}
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
    </>
  );
};
