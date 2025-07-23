import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5215515857934', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </button>
  );
};

export default FloatingWhatsAppButton;