import React, { Component } from 'react'

import i1 from '../../images/i1.png'

class Mojs extends Component {

  state = {}

  render() {
    return (
      <div>
        <div className='texto'>
        <p>Tras el examen del repositorio de GitHub, este proyecto no 
        contiene muchos contribuyentes, y las actualizaciones no se han 
        publicado en ningún momento reciente. Los compromisos más recientes 
        del proyecto oscilan entre mediados de 2016 y mediados de 2017, 
        pero no se han visto muchas acciones desde entonces.</p>

        <p>Fuentes confiables me han dicho que esta biblioteca se ha estancado 
        debido a la vida ocupada de su creador, por lo que el futuro de esta 
        biblioteca es muy abierto. <span className='span1'> Sugeriría 
        evitarlo, </span> ya que el apoyo será sombrío, la comunidad 
        es pequeña y la dirección futura de la biblioteca es incierta.</p>

          <img className='ilustracion'  alt='imagen'/>

          

        </div>

      </div>
    )
  }
}

export default Mojs