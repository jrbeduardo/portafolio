import React from "react";
import { useScroll } from "../hooks/useScroll";

export const Manifiesto = () => {
  useScroll();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Manifiesto
              </span>
            </h1>
          </div>
          
          {/* Poem after title */}
          <div className="text-right mb-8">
            <div className="text-sm text-text-secondary italic space-y-1">
              <p className="text-xs font-medium text-primary mb-2">Y una sonrisa</p>
              <p>La noche no es jamás total</p>
              <p>Hay siempre porque lo digo</p>
              <p>Lo afirmo</p>
              <p>Al término de una tristeza una ventana abierta</p>
              <p>Una ventana iluminada</p>
              <p>Hay siempre un sueño que vela</p>
              <p>Deseo a colmar hambre a satisfacer</p>
              <p>Un corazón generoso</p>
              <p>Una mano tendida una mano abierta</p>
              <p>Atentos ojos</p>
              <p>Una vida la vida para compartir</p>
              <p className="text-xs font-medium text-primary mt-3">— Paul Éluard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arcano 17 Introduction */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-steel/50 border border-primary/20 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-text-primary text-lg leading-relaxed">
              En Arcano 17, André Breton habla de una estrella que hace palidecer a las otras: el lucero de la mañana, Lucifer, ángel de la rebelión. Su luz la forman tres elementos: la libertad, el amor y la poesía. Cada uno de ellos se refleja en los otros dos, como tres astros que cruzan sus rayos para formar una estrella única. Así, hablar de la libertad será hablar de la poesía y del amor.
            </p>
          </div>
          
          {/* Tarot Image */}
          <div className="flex justify-center mt-12">
            <div className="w-64 h-auto bg-blue-steel/50 border border-primary/20 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm">
              <img 
                src="/Jean_Dodal_Tarot_trump_17.jpg" 
                alt="Jean Dodal Tarot XVII - Las Estrellas"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>




      {/* Quotes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-blue-steel/50 border border-primary/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-text-primary text-lg leading-relaxed space-y-6">
              <p>Únicamente la palabra libertad tiene el poder de exaltarme.</p>
              
              <p>No será el miedo a la locura lo que nos obligue a bajar la bandera de la imaginación.</p>
              
              <p>Amada imaginación, lo que más amo en ti es que jamás perdonas.</p>
              
              <p>La poesía decretará la muerte del dinero, y ella sola romperá en pan del cielo para la tierra.</p>
              
              <p>Todo induce a creer que el surrealismo actúa sobre los espíritus tal como actúan los estupefacientes […] puede inducir al hombre a tremendas rebeliones.</p>
              
              <p>El hombre propone y dispone. Tan sólo de él depende poseerse por entero, es decir, mantener en estado de anarquía la cuadrilla de sus deseos.</p>
              
              <p>¡Adiós absurdas selecciones, sueños de vorágine, rivalidades, largas esperas, fuga de las estaciones, artificial orden de las ideas, pendiente del peligro, tiempo omnipresente!</p>
              
              <p>El idioma ha sido dado al hombre para que lo use de manera surrealista.</p>
              
              <p>En verdad, vivimos en nuestra fantasía, cuando estamos en ella.</p>
              
              <p>El interés por la vida carece de base. Simplicidad, lo que ocurre en mi interior sigue siéndome inoportuno.</p>
              
              <p>Cambiar la vida, dijo Rimbaud; transformar el mundo, dijo Marx: esas dos consignas nos parecen una sola.</p>
              
              <p>Te deseo que seas locamente amada.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};