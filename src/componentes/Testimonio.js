import React from 'react';
import '../hojasDeEstilos/Testimonios.css'

function Testimonio(){
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require('../imagenes/testimonio-emma.png')}
      alt='imagen de emma'/>
      <div className='contenedor-tecto-testimonio'>
        <p className='nombre-testimonio'>Emma Bositan en Suecia</p>
        <p className='cargo-testimonio'>Ingenieria de software en Spotify</p>
        <p className='texto.testimonio'>"Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
      </div>
    </div>
  );
}

export default Testimonio;