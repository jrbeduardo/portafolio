import React from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';

export const CVDownload = ({ isOpen, onClose }) => {

  const cvLinks = {
    es: "https://drive.google.com/file/d/1bSd8yliyqZK8bH8osDhZNm1SepAoz4rf/view?usp=drive_link",
    en: "https://drive.google.com/file/d/1aeGB5uPYeSs2qHTzpTxTp5bZmKwED7OP/view?usp=sharing"
  };

  const handleDownload = (language) => {
    window.open(cvLinks[language], '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-blue/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-blue-steel/90 backdrop-blur-md border border-primary/20 rounded-lg p-6 max-w-md w-full mx-4 shadow-lg shadow-primary/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-text-primary">
            Descargar CV
          </h3>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-primary transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <p className="text-text-secondary mb-6 text-center">
          Selecciona el idioma para descargar mi currículum vitae
        </p>

        <div className="space-y-3">
          <button
            onClick={() => handleDownload('es')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-primary text-dark-blue font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="text-lg">🇪🇸</span>
            <FaDownload className="w-4 h-4" />
            <span>CV en Español</span>
          </button>

          <button
            onClick={() => handleDownload('en')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-dark-blue transition-all duration-200"
          >
            <span className="text-lg">🇺🇸</span>
            <FaDownload className="w-4 h-4" />
            <span>CV in English</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};