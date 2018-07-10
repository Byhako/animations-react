import React, { Component } from 'react'
import anime from 'animejs'

import i9 from '../../images/i9.png'
import i10 from '../../images/i10.png'
import i11 from '../../images/i11.png'
import i12 from '../../images/i12.png'
import i13 from '../../images/i13.png'
import i14 from '../../images/i14.png'
import i15 from '../../images/i15.png'
import i16 from '../../images/i16.png'
import i17 from '../../images/i17.png'
import i18 from '../../images/i18.png'
import i19 from '../../images/i19.png'
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

  handleAnimar6 = () => {
    const cssProperties = anime({
      targets: '.square7',
      translateX: 350,
      opacity: .4,
      backgroundColor: '#A40000',
      borderRadius: ['0em', '2em'],
      easing: 'easeInOutQuad'
    })
  }

  handleAnimar7 = () => {
    const CSStransforms = anime({
      targets: '.square8',
      translateX: 350,
      scale: 2,
      rotate: '340deg'
    })
  }

  handleAnimar8 = () => {
    console.log('888888888')
    const domAttributes = anime({
      targets: '.textInput',
      placeholder: 1000,
      round: 1,
      easing: 'easeInOutExpo',
      duration: 3000
    })
  }

  handleAnimar9 = () => {
    const svgAttributes = anime({
      targets: '#svgAttributes polygon',
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      easing: 'easeInOutExpo'
    })
  }

  handleAnimar10 = () => {
    const duration = anime({
      targets: '.square9',
      translateX: {
        value: 250,
        duration: 800
      },
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250 // All properties except 'scale' inherit 250ms delay
    })
  }

  handleAnimar11 = () => {
    const combinedFunctionBasedProp = anime({
      targets: '.square10',
      translateX: 350,
      rotate: 180,
      duration: function(target) {
        // Duration based on every div 'data-duration' attribute
        return target.getAttribute('data-duration');
      },
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 100;
      },
      elasticity: function(target, index, totalTargets) {
        // Elasticity multiplied by every div index, in descending order
        return 200 + ((totalTargets - index) * 200);
      },
      direction: 'alternate',
      loop: true
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

       <h2 className='subtitulo'>TARGETS</h2>

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

      
      <h2 className='subtitulo'>PROPIEDADES</h2>

      <p>Podemos animar propiedades CSS y hacer trasnformaciones. Veamos.</p>

{/************************************************************************/}
      <h3 className='separadorh3'>Propiedades css</h3>

       <p>Debemos cambiar los guiones de la sintaxis css a sintaxis CamelCase,
       osea, <span className='span1'> "font-size" --> "fontSize"</span>y cada 
       propiedad entra como una key mas del objeto que tiene como argumento 
       la función anime.</p>

      <img className='ilustracion' src={i14} alt='treeShaking'/>

      <div className='row'>
        <div className='square7 green1'></div>
        <button className='btngreen' onClick={this.handleAnimar6}>Animar</button>
        <span className='label'>Propiedades css</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Trasnformaciones css</h3>

       <p>Las transformaciones se usan como keys en el objeto que se pasa a 
       la función anime.</p>

      <img className='ilustracion' src={i15} alt='treeShaking'/>

      <div className='row'>
        <div className='square8 green1'></div>
        <button className='btngreen' onClick={this.handleAnimar7}>Animar</button>
        <span className='label'>trasnformaciones css</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Atribudos del DOM</h3>

       <p>Podemos modificar atributos de elementos del DOM, como por ejemplo
       un placeholder.</p>

      <img className='ilustracion' src={i16} alt='treeShaking'/>

      <div className='row'>
        <input className="textInput" placeholder="0"/>
        <button className='btngreen' onClick={this.handleAnimar8}>Animar</button>
        <span className='label'>atributos DOM</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Atribudos SVG</h3>

       <p>Podemos modificar figuras SVG modificando susu puntos.</p>

      <img className='ilustracion' src={i17} alt='treeShaking'/>

      <div className='row'>
        
        <div id="svgAttributes"> <svg width="128" height="128" viewBox="0 0 128 128">
        <polygon points="64 81.41719803260159 8.574 99.1390028279918 51.63484079439159 59.999905225686916 64 3.1390028279918063 76.3651592056084 59.999905225686916 119.426 99.1390028279918 " fill="currentColor"></polygon>
        </svg> </div>

        <button className='btngreen' onClick={this.handleAnimar9}>Animar</button>
        <span className='label'>Figura SVG</span>
      </div>


      <h2 className='subtitulo'>PARÁMETROS</h2>

      <p>Podemos configurar la duración, el retrazo, la aceleracion. 
      Especificamos el tiempo que durara la animación en milisegundos. 
      También podemos darle propiedades a distintas transformaciones agrupandolas 
      en objetos Veamos.</p>

      <img className='ilustracion' src={i18} alt='treeShaking'/>

      <div className='row'>
        <div className='square9 green1'></div>
        <button className='btngreen' onClick={this.handleAnimar10}>Animar</button>
        <span className='label'>parámetros</span>
      </div>

      <h2 className='subtitulo'>FUNCIONES BASADAS EN PARÁMETROS</h2>

      <p>A cada parametro podemos pasarle una función que controlen el 
      comportamiento de la animación a medida que esta avanza.</p>

      <img className='ilustracion' src={i19} alt='treeShaking'/>

      <div className='row gruesito'>

      <div>
        <div data-duration="2000" className="square10 green1"></div>
        <div data-duration="1500" className="square10 blue1"></div>
        <div data-duration="1000" className="square10 orange1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar11}>Animar</button>
        <span className='label'>funciones de parámetros</span>
      </div>

      <p>Notemos las últimas dos keys, <span className='span1'> duration y loop
      </span>. Duration puede tomar los valores <b>"alternate"</b> y 
      <b>"reverse"</b> Loop puede tomar un valor numerico entero, que indica
      la cantidad de veces que se repetirá la animación, o si deseamos una 
      animación infinita le pasamos el parámetro "true". </p>

      </div>

      </div>
    )
  }
}

export default Animejs