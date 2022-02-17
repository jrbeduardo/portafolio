import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import AOS from 'aos';
import TypewriterComponent from "typewriter-effect";
AOS.init({
  duration: 1000
});
export const Contact = () => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {}
  }, []);
  return (
    <div>
        
        <div className='bg-theme flex items-center md:flex-col justify-evenly h-screen text-white'>
          
          <div className='h-4/5 md:h-3/5'>
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_abqysclq.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
          </div>
          <div className="text-center">
            <p className="font-semibold md:text-2xl text-4xl md:my-2">
            <TypewriterComponent
                options={{
                  strings: ['Si prefieres puedes descargar mi curriculum.',
                '. . . o bien llena el formulario de más abajo ⬇️'],
                  autoStart: true,
                  loop: true,
                }}
              />
              
            </p>
            <a href="https://drive.google.com/file/d/1s99GQpOPuuzaHB8D_85czUrPSnUTdgqn/view?usp=sharing" download="CV_eduardo.pdf">
              <button className='bg-azul text-2xl rounded text-white px-5 py-1 mb-5 mt-5 text-xl'>
                descarga mi CV
              </button>
            </a>  
          </div>
        </div>
        <div className="mt-10">
          <ContactForm/>
        </div>
        
        
        
    </div>
  )
}
