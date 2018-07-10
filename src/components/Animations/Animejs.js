import React, { Component } from 'react'
import anime from 'animejs'

import i9 from '../../images/i9.png'
import i10 from '../../images/i10.png'
import i11 from '../../images/i11.png'
import i12 from '../../images/i12.png'
import i13 from '../../images/i13.png'
import './animejs.css'

class Animejs extends Component {

  state = {}

  handleAnimar1 = () => {
    const cssSelector = anime({
      targets: '.square1',
      translateX: 350
    })
  }

  handleAnimar2 = () => {
    // const domNodeEl = document.querySelector('.square2')
    const domNode = anime({
      targets: this.domNodeEl,
      translateX: 350
    })
  }

  handleAnimar3 = () => {
    const elementos = document.querySelectorAll('.square3')

    const nodeList = anime({
      targets: elementos,
      translateX: 350
    })
  }

  handleAnimar4 = () => {
    const el = document.querySelector('.square4')

    const JSarray = anime({
      targets: [el, '.square5', '#square6'],
      translateX: 350
    })
  }

  handleAnimar5 = () => {
    var obj = { charged: '0%' }

    const JSobject = anime({
      targets: obj,
      charged: '100%',
      round: 1,
      easing: 'linear',
      update: function() {
        var el = document.querySelector('#importante')
        // el.innerHTML = JSON.stringify(obj)
        el.innerHTML = 'charged: '+ obj.charged
      }
    })
  }

  render() {
    return (
      <div>
      <div className='texto'>

      <p>Funciona con CSS Properties, CSS individuales, SVG o cualquier 
      atributo DOM y JavaScript Objects. Sus características notables son 
      fotogramas clave con la capacidad de encadenar, métodos de línea de 
      tiempo para sincronizar múltiples instancias, controles de reproducción,
       control de transformación CSS individual, valores individuales para 
       múltiples objetivos de animación, rutas / líneas / morphing SVG y 
       muchas funciones de relajación.</p>

       <h2>TARGETS</h2>

       <p><span className='span1'>anime</span> es una función que recibe un 
       objeto, el cual puede tener la key "targets" en la cual va el objetivo 
       de la animación, y luego las animaciones que se le aplicaran. Hay varias
       formas de usar el objetivo. Veamos.</p>

{/************************************************************************/}
       <h3 className='separadorh3'>Selector css</h3>

       <p>Usamos como selector un id o clase.</p>

      <img className='ilustracion' src={i9} alt='treeShaking'/>

      <div className='row'>
        <div className="square1 green1"></div>
        <button className='btngreen' onClick={this.handleAnimar1}>Animar</button>
        <span className='label'>Selector CSS</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>DOM node</h3>

       <p>Usamos como selector un elemento como tal, obtenido mediante 
       <span className='span1'> getElemetById </span> o con una referencia.</p>

      <img className='ilustracion' src={i10} alt='treeShaking'/>

      <div className='row'>
        <div className="square2 green1" ref={el => this.domNodeEl = el}></div>
        <button className='btngreen' onClick={this.handleAnimar2}>Animar</button>
        <span className='label'>DOM node</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Lista de nodos</h3>

       <p>Para animar varios elementos a la vez, se puede hacer una lista de 
       los nodos usando <span className='span1'>document.querySelectorAll(' ')
       </span> y pasando esta lista al target.</p>

      <img className='ilustracion' src={i11} alt='treeShaking'/>

      <div className='row'>
        <div className="square3 green1"></div>
        <div className="square3 blue1"></div>
        <div className="square3 orange1"></div>
        <button className='btngreen' onClick={this.handleAnimar3}>Animar</button>
        <span className='label'>Lista de nodos</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Array de JavaScript</h3>

       <p>Otra forma de animar varios elementos a la vez, es pasarle al 
       targer un array de JS, el cual puede tener ids, clases, y 
       referencias a elementos.</p>

      <img className='ilustracion' src={i12} alt='treeShaking'/>

      <div className='row'>
        <div className="square4 green1"></div>
        <div className="square5 blue1"></div>
        <div className="orange1" id='square6'></div>
        <button className='btngreen' onClick={this.handleAnimar4}>Animar</button>
        <span className='label'>Array JS</span>
      </div>
{/************************************************************************/}
      <h3 className='separadorh3'>Objeto de JavaScript</h3>

       <p>El objetivo de la animación puede ser un objeto, el cual, con su cambio
       modifica algo en la vista que tiene el usuario.</p>

      <img className='ilustracion' src={i13} alt='treeShaking'/>

      <div className='row'>
        <div id='importante'>charged: 0%</div>
        <button className='btngreen' onClick={this.handleAnimar5}>Animar</button>
        <span className='label'>Objeto de JS</span>
      </div>

      </div>

      </div>
    )
  }
}

export default Animejs