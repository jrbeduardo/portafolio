import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import AOS from 'aos';
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
        
        <div className='flex items-center md:flex-col justify-evenly h-screen  bg-theme text-white'>
        
          <div className='h-3/4'>
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_abqysclq.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
          </div>
          <div data-aos="slide-left">
            <p className="font-semibold text-2xl">
              Se prefieres puedes descargar mi curriculum.
            </p>
            <a href="https://drive.google.com/file/d/1s99GQpOPuuzaHB8D_85czUrPSnUTdgqn/view?usp=sharing" download="CV_eduardo.pdf">
              <button className='bg-tomato rounded text-white px-5 py-1 mb-5 mt-5 text-xl'>
                descarga mi CV
              </button>
            </a>  
          </div>
          
          
         
        </div>

        <ContactForm/>
        
        
    </div>
  )
}
