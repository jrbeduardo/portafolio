
import { useEffect } from "react";
import { FaDocker, FaFlask, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact, FaUbuntu } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import AOS from 'aos';
AOS.init({
  duration: 1000
});

export const Home = () => {
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
        {/* intro section */}
        <div className='h-fit bg-theme'>
          <div className='flex md:flex-col   justify-evenly h-screen items-center border-4 border-white rotate-12  mx-10 bg-theme md:rotate-0 md:border-0'>
            <div className='h-3/5'>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_q7uarxsb.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>            
            </div>
            <div className='font-bold text-white md:px-5'>
              <h1 className='text-5xl md:text-3xl' data-aos='slide-right'>Hola, soy <b className='text-yellow-500'> José Eduardo</b></h1>
              <h2 className='text-3xl md:text-xl' data-aos='slide-left'>Matemático y <b className='text-red-500'>Programador</b></h2>
            </div>

          </div>

        </div>

          {/* about */}  
          <div className='h-screen text-2xl font-raleway flex flex-col justify-center mx-24'>
            <h2 className='text-4xl text-center font-bold my-10' data-aos='slide-right'>¿Quién es Soy?</h2>
            <p className='text-2xl md:text-lg my-5'>
              Estudié Matemáticas en la Universidad Nacional Autónoma de México (UNAM). Tengo la licenciatura y la maestría.
            </p>
            <p className='text-2xl md:text-lg my-5'>
              Desde que me gradue he impartido clases en distintas instituciones educativas.
            </p>
            <p className='text-2xl md:text-lg my-5'>
              Pero también disfruto y me apasiona la programación por lo que estoy estudiando la licenciatura en Ingeniería en Computación en la UNAM. 
            </p>
            <p className='text-2xl md:text-lg'>
              Estoy más orientado al Backend, pero también hago Frontend.
            </p>
        </div>
      
        {/* Languages */}
        <div>
        <h2 className='text-3xl font-bold text-center mb-5' data-aos='slide-left'>Lenguajes que manejo</h2>
          <div className='grid md:grid-cols-1 grid-cols-4'>
            <FaJava size={180} color="orange" className='w-full text-center mt-10'/>
            <FaPython size={180} color="#048bb1" className='w-full text-center mt-10 '/>
            <SiJavascript size={180} color="#e8d44d" className='w-full text-center mt-10 animate-bounce'/>
            <FaPhp size={180} color="#6b75b2" className='w-full text-center mt-10'/>
          </div>
        </div>
        {/* tecnologias */}
        <div>
          <h2 className='text-3xl font-bold text-center my-10' data-aos='slide-right'>Herramientas que uso</h2>
          <div className='grid md:grid-cols-2 grid-cols-6'>
            <FaReact size={160} color="#01c5f7" className='w-full text-center mt-10 animate-spin'/>
            <DiDjango size={160} color="#103c2d" className='w-full text-center mt-10'/>
            <FaFlask size={160}  className='w-full text-center mt-10'/>
            <FaNodeJs size={160} color="#8cbf3e" className='w-full text-center mt-10'/>
            <FaHtml5 size={160} color="#dd4b24" className='w-full text-center mt-10'/>
            <SiPostgresql size={160} color="#305d8d" className='w-full text-center mt-10'/>
            <SiMongodb size={160} color="#239443" className='w-full text-center mt-10'/>
            <FaUbuntu size={160} color="#e55323" className='w-full text-center mt-10 '/>
            <FaDocker size={160} color="#0996e5" className='w-full text-center mt-10'/>
            <FaGithub size={160}  className='w-full text-center mt-10'/>
            <SiTailwindcss size={160} color="#14b9c5" className='w-full text-center mt-10'/>
          </div>
        </div>
        {/* Python Buff */}
        <div className='my-20'>
          <div className='text-center h-52 bg-tomato'>
            <h2 className='text-white font-bold text-3xl py-10'>Sí, estás en lo correcto... Soy fan de Python</h2>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96'>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_2znxgjyt.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
            </div>
            <p className='text-2xl my-5  md:px-5 px-14 py-10'>
              Python es un lenguaje de programación de alto nivel que se utiliza para desarrollar aplicaciones de todo tipo. Se trata de un lenguaje multiplataforma de código abierto y, por lo tanto, gratuito, lo que permite desarrollar software sin límites.
            </p>      
          </div>
          
        </div>
        {/* dev stack section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-tomato'>
            <h2 className='text-white font-bold text-3xl py-10'>My Dev stack</h2>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in-up'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"  
            background="transparent"  
            speed="1"   
            loop 
            autoplay></lottie-player>
            </div>
            <div className='grid md:grid-cols-1 grid-cols-3 p-5'>
              <div className='text-left'>
                <h2 className='text-xl font-bold'>FrontEnd</h2>
                <hr></hr>
                <p className='font-semibold mt-2'>HTML/CSS</p>
                <p className='font-semibold mt-2'>REACT</p>
                <p className='font-semibold mt-2'>JavaScript</p>
              </div>
              <div className='text-center'>
                <h2 className='text-xl font-bold'>UI / UX</h2>
                <hr></hr>
                <p className='font-semibold mt-2'>Tailwind</p>
                <p className='font-semibold mt-2'>Bootstrap</p>
              </div>
              <div className='text-right'>
                <h2 className='text-xl font-bold'>BackEnd and DB</h2>
                <hr></hr>
                <p className='font-semibold mt-2'>Node JS</p>
                <p className='font-semibold mt-2'>Python</p>
                <p className='font-semibold mt-2'>MongoDB</p>
                <p className='font-semibold mt-2'>Oracle</p>
              </div>
            
            </div>      
          </div>
          
        </div>
      </div>

    
  )
}
