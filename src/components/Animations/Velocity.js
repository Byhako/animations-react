import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'

import i1 from '../../images/i1.png'
import './velocity.css'

class Velocity extends Component {

  state = {
    animar1: true
  }

  animacion1 = () => {
    this.setState({animar1:!this.state.animar1})
  }

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

{/************************************************************************/}

      <div className='row'>
        <VelocityComponent
          animation={
            { opacity: this.state.animar1 ? 1 : 0,
              left: this.state.animar1 ? 0 : '500px',
              rotateZ: "360deg"}
          }
          duration={2000}
          loop={3}
        >
          <div className="cubo1 green1"></div>
        </VelocityComponent>
        <button className='btngreen' onClick={this.animacion1}>Animar</button>
      </div>


          

        </div>

      </div>
    )
  }
}

export default Velocity