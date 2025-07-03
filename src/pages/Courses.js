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
          <div className="h-4/5 md:h-3/5 bg-gray-charcoal">
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
            <path fill="#374151" d="M0,96L26.7,90.7C53.3,85,107,75,160,101.3C213.3,128,267,192,320,229.3C373.3,267,427,277,480,261.3C533.3,245,587,203,640,192C693.3,181,747,203,800,213.3C853.3,224,907,224,960,224C1013.3,224,1067,224,1120,192C1173.3,160,1227,96,1280,85.3C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
          </svg>
      </div>
            
          </div>
      </div>
     
      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {coursesData.map((course) => (
            <div key={course.title} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => window.open(course.link, '_blank')}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-md hover:bg-blue-50 transition-colors duration-200"
                  >
                    {course.extraLink ? 'Clases' : 'Ver Curso'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  {course.extraLink && (
                    <button 
                      onClick={() => window.open(course.extraLink, '_blank')}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-800 border border-green-600 hover:border-green-800 rounded-md hover:bg-green-50 transition-colors duration-200"
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
          ))}
        </div>
      </div>
    </>
  );
};
