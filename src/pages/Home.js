import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { CVDownload } from "../components/CVDownload";

export const Home = () => {
  useScroll();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const skills = [
    { category: "Lenguajes de Programación", items: ["Python", "JavaScript", "R", "Java", "C", "PHP"] },
    { category: "Big Data & ETL", items: ["PySpark", "Apache Spark", "ETL Pipelines", "Data Warehousing", "Apache Airflow"] },
    { category: "Machine Learning & Data Science", items: ["scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Desarrollo Web & APIs", items: ["Flask", "Django", "FastAPI", "React", "Node.js", "REST APIs"] },
    { category: "Bases de Datos", items: ["SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Data Modeling"] },
    { category: "DevOps & Herramientas", items: ["Docker", "Git", "Linux", "Power BI", "Google Cloud", "Azure"] }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-60 mx-auto mb-6 relative">
              <img 
                src="/fot.png" 
                alt="Eduardo Barrios" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-text-primary mb-4">
              Eduardo Barrios
            </h1>
            <p className="text-xl text-primary mb-6">
              Ingeniero de Datos & Desarrollador Full Stack
            </p>
            <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Ingeniero de Datos con formación en Matemáticas (UNAM) y más de 3 años de experiencia 
              en retail. Especialista en arquitectura de datos, automatización de pipelines ETL 
              y despliegue de modelos en producción.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setIsCVModalOpen(true)}
              className="btn-primary hover-gradient"
            >
              Descargar CV
            </button>
            <a 
              href="mailto:jrbeduardo@gmail.com"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-dark-blue transition-colors duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-primary mb-8 text-center">
            Perfil Profesional
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-text-secondary leading-relaxed mb-6">
              <strong className="text-primary">Ingeniero de Datos</strong> con formación en Matemáticas (UNAM) y más de 3 años de experiencia 
              en retail. Especialista en arquitectura de datos, automatización de pipelines ETL y despliegue de modelos en producción. 
              Apasionado por generar valor mediante soluciones analíticas basadas en datos.
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Mi experiencia en <strong className="text-primary">Grupo Coppel</strong> como Ingeniero de Datos incluye recolección de datos 
              de diversas fuentes, despliegue e integración de modelos matemáticos, elaboración de arquitecturas para almacenar 
              modelos analíticos y generación de procesos ETL automatizados.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Como <strong className="text-primary">desarrollador Full Stack</strong> y con amplia experiencia en docencia universitaria, 
              combino conocimientos teóricos sólidos con aplicaciones prácticas en el desarrollo de soluciones tecnológicas robustas y escalables.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-primary mb-12 text-center">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block px-3 py-1 text-sm text-primary bg-primary/20 rounded-full mr-2 mb-2 border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-light-section/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-8">
            Experiencia Destacada
          </h2>
          <div className="bg-blue-steel/50 rounded-lg p-8 shadow-sm border border-primary/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <img 
                  src="Coppel_logo_(2025).png" 
                  alt="Coppel Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Ingeniero de Datos en Grupo Coppel
            </h3>
            <p className="text-text-secondary/70 mb-4">
              Marzo 2022 - Octubre 2024
            </p>
            <p className="text-text-secondary leading-relaxed">
              Recolección de datos de diversas fuentes, despliegue e integración de modelos matemáticos, 
              elaboración de arquitecturas para almacenar modelos analíticos en ambientes de desarrollo, 
              pruebas y producción, y generación de procesos ETL automatizados.
            </p>
          </div>
        </div>
      </section>

      {/* CV Download Modal */}
      <CVDownload 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </div>
  );
};