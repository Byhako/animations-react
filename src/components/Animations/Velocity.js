import React, { Component } from 'react'

import i1 from '../../images/i1.png'

class Velocity extends Component {

  state = {}

  render() {
    return (
      <div>
        <div className='texto'>
        <p> Velocity es un motor de animación con la misma API que jQuery $
         .animate (). Funciona con y sin jQuery. Ofrece animación de color, 
         transformaciones, bucles, suavizado, compatibilidad SVG y 
         desplazamiento.</p>

         <p>Si necesita una biblioteca con documentación que lea bien, 
         tenga una sintaxis amigable, funcione con y sin jQuery, una 
         larga trayectoria, abundantes recursos de material didáctico y 
         un apoyo digno de la comunidad, entonces Velocity es para usted.</p>



          <img className='ilustracion'  alt='imagen'/>

          

        </div>

      </div>
    )
  }
}

export default Velocity