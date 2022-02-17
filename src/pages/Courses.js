import { coursesData } from "../resources/courses";
import { useScroll } from "../hooks/useScroll";
import TypewriterComponent from "typewriter-effect";


export const Courses = () => {
  useScroll();
  return (
    <>
      <div>
        <div className="h-screen relative">
          <div className="h-3/4 pt-20 bg-theme">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_xhfwgplf.json" 
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="absolute left-0 right-0 -bottom-70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#2a2a2a"
                d="M0,128L48,128C96,128,192,128,288,112C384,96,480,64,576,74.7C672,85,768,139,864,176C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-5 md:mx-2.5">
        <p className="text-3xl md:text-xl text-center mt-5 mx-24 md:mx-2.5">
          Como profesor tengo experiencia en universidades públicas y educación
          en línea
        </p>
        <p className="text-4xl  md:text-2xl text-center font-bold mt-5">
          PORQUE . . .
        </p>
        <div className="font-bold text-center bg-gray-500 mx-5 p-20 text-white rounded-tl-full rounded-br-full mt-5">
          <h2 className="text-4xl md:text-2xl">
          <TypewriterComponent
                options={{
                  strings: ['La educación nos ayuda a ver el significado de la vida', 'El principio de la educación es predicar con el ejemplo'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </h2>
        </div>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {coursesData.map((course) => (
          <div key={course.title}>
            <div className="relative p-10 border-2 text-center rounded-bl-3xl border-gray-400">
              <img
                className="w-full h-52"
                src={course.image}
                alt={course.title}
              ></img>

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black hover:opacity-80">
                <h1 className="text-2xl text-white font-semibold">
                  {course.title}
                </h1>
                <button
                  onClick={() => {
                    window.open(course.link, "_blank");
                  }}
                  className="border-2  text-white rounded border-white py-2 px-5 hover:bg-green-500 font-bold mt-5"
                >
                  VER
                </button>
                <p className="text-white mt-2 px-5">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
