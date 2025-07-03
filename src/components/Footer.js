import { FaLinkedin, FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-charcoal w-full mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className='font-raleway text-center'>
          <p className='text-lg text-white mb-6'>© 2025 Eduardo Barrios</p>
          <div className='flex justify-center space-x-8 mb-4'>
            <FaLinkedin 
              size={28} 
              className="text-white hover:text-blue-accent cursor-pointer transition-colors" 
              onClick={()=>{
                window.open("https://www.linkedin.com/in/jrbeduardo", '_blank');
              }}
            />
            <FaGithub 
              size={28} 
              className="text-white hover:text-blue-accent cursor-pointer transition-colors" 
              onClick={()=>{
                window.open("https://github.com/jrbeduardo", '_blank');
              }}
            />
            <Link to="contacto">
              <SiGmail 
                size={28} 
                className="text-white hover:text-blue-accent transition-colors"
              />
            </Link>
          </div>
          <p className='text-sm text-gray-medium'>Ingeniero de Datos | Desarrollador Full Stack</p>
        </div>
      </div>
    </div>
  )
}
