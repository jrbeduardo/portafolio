import { FaPython, FaDatabase} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { SiPowerbi } from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useScroll } from '../hooks/useScroll';


export const Experiencia = () => {
  useScroll();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-20 pb-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-3xl font-light text-center text-white mb-6">
            Experiencia
          </h1>
          <p className="text-lg md:text-base text-center text-slate-300 max-w-2xl mx-auto font-light">
            Mi trayectoria profesional como Ingeniero de Datos, desarrollador y docente universitario.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <VerticalTimeline>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--education"
            date="AGO 2024 - ENE 2025"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<MdSchool/>}
        >
            <h3 className="vertical-timeline-element-title">Ayudante de Profesor de Asignatura Nivel B</h3>
            <h4 className="vertical-timeline-element-subtitle">Facultad de Ciencias UNAM</h4>
            <p>
            Asignaturas impartidas:
            <ul className='list-disc'>
                <li>Proyecto I Clasificación de Imágenes con redes neuronales, Grupo 6018, semestre 2025-I.</li>
            </ul>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--work"
            date="MAR 2022 - OCT 2024"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaDatabase/>}
        >
            <h3 className="vertical-timeline-element-title">Ingeniero de Datos</h3>
            <h4 className="vertical-timeline-element-subtitle">Coppel</h4>
            <p>
            Recolección de datos de diversas fuentes (bases de datos, CSV, APIs). Despliegue e integración de modelos matemáticos mediante desarrollo de aplicativos. Elaboración de arquitecturas para almacenar modelos analíticos en ambientes de desarrollo, pruebas y producción. Generación de procesos ETL y automatización, construyendo pipelines para procesamiento eficiente de datos.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--work"
            date="1/09/2021 - 29/10/2021"
            iconStyle={{ background: 'rgb(234, 195, 16)', color: '#fff' }}
            icon={<SiPowerbi/>}
        >
            <h3 className="vertical-timeline-element-title">Becario Digitalent</h3>
            <h4 className="vertical-timeline-element-subtitle">Unilever</h4>
            <p>
            Participación en el programa Digitalent by Unilever en el cual se desarrollo el proyecto <i>Automatización Save to Invest</i>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--work"
            date="5/04/2021 -1/06/2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaPython/>}
        >
            <h3 className="vertical-timeline-element-title">Desarrollador Web Scraper</h3>
            <h4 className="vertical-timeline-element-subtitle">OBLEK</h4>
            <p>
            Extracción y recopilación de información de forma automática de la Web. Implementación de algoritmos en Python para el mantenimiento de software. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--education"
            date="2018 - 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<MdSchool/>}
        >
            <h3 className="vertical-timeline-element-title">Profesor de Tiempo Determinado</h3>
            <h4 className="vertical-timeline-element-subtitle">Departamento de Matemáticas UAM-I</h4>
            <p>
            Asignaturas impartidas:
            <ul className='list-disc'>
                <li>Precálculo, Grupo BA02, trimestre 2018-O.</li>
                <li>Álgebra Lineal Aplicada I, Grupo CC51, trimestre 2019-I.</li>
                <li>Álgebra Lineal Aplicada I, Grupo CC03, trimestre 2020-I.</li>
                <li>Cálculo Integral, Grupo  CB51, trimestre 2020-I. </li>
            </ul>
            </p>
            
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--education"
            date="2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<MdSchool/>}
        >
            <h3 className="vertical-timeline-element-title">Profesor de Asignatura.</h3>
            <h4 className="vertical-timeline-element-subtitle">Plantel del Valle UACM</h4>
            <p>
            Asignaturas impartidas:
            <ul className='list-disc'>
                <li>Cálculo Diferencial, Grupo 403, semestre 2018-II.</li>
            </ul>
            </p>
            
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="font-bold vertical-timeline-element--education"
            date="2010 - 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<MdSchool/>}
        >
            <h3 className="vertical-timeline-element-title">Ayudante de Profesor de Asignatura Nivel B</h3>
            <h4 className="vertical-timeline-element-subtitle">Facultad de Ciencias UNAM</h4>
            <p>
            Asignaturas impartidas:
            <ul className='list-disc'>
                <li>Álgebra Superior II, Grupo 4039, semestre 2010-2.</li>
                <li>Álgebra Superior I, Grupo 4003, semestre 2012-1. </li>
                <li>Álgebra Superior II, Grupo 4034, semestre 2012-1.</li>
                <li>Álgebra Superior II, Grupo 4042, semestre 2012-2.</li>
            </ul>
            </p>
            
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
