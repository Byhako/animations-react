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
import i20 from '../../images/i20.png'
import i21 from '../../images/i21.png'
import i22 from '../../images/i22.png'
import i23 from '../../images/i23.png'
import i24 from '../../images/i24.png'
import i25 from '../../images/i25.png'
import i26 from '../../images/i26.png'
import i27 from '../../images/i27.png'
import i28 from '../../images/i28.png'
import i29 from '../../images/i29.png'
import i30 from '../../images/i30.png'
import i31 from '../../images/i31.png'
import i32 from '../../images/i32.png'
import i33 from '../../images/i33.png'
import i34 from '../../images/i34.png'
import './animejs.css'

class Animejs extends Component {

  run = React.createRef()
  update = React.createRef()
  progress = React.createRef()
  completed = React.createRef()

  state = {}

  componentDidMount () {
    //inicializo botoncitos
    this.control = anime({
      targets: '.square28',
      translateX: 250,
      delay: function(el, i, l) { return i * 100; },
      direction: 'alternate',
      loop: true,
      autoplay: false
    })

    // Controles y bara de progreso, linea de tiempo
    const controlsProgressEl = document.querySelector('.progress')

    const TLcontrols = anime.timeline({
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      update: function(anim) {
        controlsProgressEl.value = anim.progress;
      }
    })

    TLcontrols
      .add({
        targets: '.square29',
        translateX: [ { value: 100 }, { value: 200 }, { value: 350 } ],
        translateY: [ { value: 50 }, { value: 100 }, { value: 100 } ],
        duration: 3000,
        offset: 0
      })
      .add({
        targets: '.square30',
        translateX: [ { value: 100 }, { value: 200 }, { value: 350 } ],
        translateY: [ { value: 50 }, { value: -50 }, { value: -50 } ],
        duration: 3000,
        offset: 0
      })
      .add({
        targets: '.square31',
        translateX: [ { value: 100 }, { value: 350 } ],
        translateY: [ { value: -100 }, { value: -50 }, { value: -50 } ],
        duration: 3000,
        offset: 0
      })

    TLcontrols.pause()

    controlsProgressEl.addEventListener('input', function() {
      TLcontrols.seek(TLcontrols.duration * (controlsProgressEl.value / 100))
    })

    this.controlLineTime = TLcontrols

  }

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
        const el = document.querySelector('#importante2')
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

  handleAnimar12 = () => {
    const unitlessValue = anime({
      targets: '.square11',
      translateX: 250,
      rotate: 180,
      duration: 5000
    })

    const specificUnit1 = anime({
      targets: '.square12',
      translateX: '250px',
      rotate: '180deg',
      duration: 5000
    })

    const specificUnit2 = anime({
      targets: '.square13',
      translateX: '250px',
      rotate: '1turn',
      duration: 10000
    })
  }

  handleAnimar13 = () => {
    const relativeValues = anime({
      targets: '.square14',
      translateX: {
        value: '+=250',
        duration: 1000
      },
      width: {
        value: '-=10',
        duration: 1800,
        easing: 'easeInOutSine'
      },
      height: {
        value: '*=4',
        duration: 1800,
        easing: 'easeInOutSine'
      },
      direction: 'alternate'
    })
  }

  handleAnimar14 = () => {
    const colors = anime({
      targets: '.square15',
      translateX: 350,
      backgroundColor: [
        {value: '#8E3'},
        {value: 'rgb(255, 0, 0)'},
        {value: 'hsl(100, 60%, 60%)'}
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 2000
    })
  }

  handleAnimar15 = () => {
    const specificInitialValue = anime({
      targets: '.square16',
      translateX: [100, 350],
      delay: 500,
      direction: 'alternate',
      loop: true
    })
  }

  handleAnimar16 = () => {
    const functionBasedPropVal = anime({
      targets: '.square17, .square18, .square19',
      translateX: function(el) {
        return el.getAttribute('data-x')
      },
      translateY: function(el, index) {
        return 50 + (-50 * index);
      },
      scale: function(el, index, l) {
        return (l - index) + .25
      },
      rotate: function() { return anime.random(-360, 360) },
      duration: function() { return anime.random(1200, 1800) },
      duration: function() { return anime.random(800, 1600) },
      delay: function() { return anime.random(0, 1000) },
      direction: 'alternate',
      loop: true
    })
  }

  handleAnimar17 = () => {
    const keyframes = anime({
      targets: '.square20',
      translateX: [
        { value: 250, duration: 1000, delay: 500, elasticity: 0 },
        { value: 0, duration: 1000, delay: 500, elasticity: 0 }
      ],
      translateY: [
        { value: -40, duration: 500, elasticity: 100 },
        { value: 40, duration: 500, delay: 1000, elasticity: 100 },
        { value: 0, duration: 500, delay: 1000, elasticity: 100 }
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
      ],
      loop: true
    })
  }

  handleAnimar18 = () => {
    const basicTimeline = anime.timeline()

    basicTimeline
      .add({
        targets: '.green2',
        translateX: 150,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.blue2',
        translateX: 250,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.orange2',
        translateX: 350,
        easing: 'easeOutExpo'
      })
  }

  handleAnimar19 = () => {
    const Offset = anime.timeline()

    Offset
      .add({
        targets: '.square22',
        translateX: 250,
        easing: 'easeOutExpo',
        offset: 1000 // Starts at 1000ms of the timeline
      })
      .add({
        targets: '.square23',
        translateX: 250,
        easing: 'easeOutExpo',
        offset: '-=600' // Starts 600ms before the previous animation ends
      })
      .add({
        targets: '.square24',
        translateX: 250,
        easing: 'easeOutExpo',
        offset: 0 // Starts at 0ms of the timeline
      })
  }

  handleAnimar20 = () => {
    const timelineParameters = anime.timeline({
      direction: 'alternate',
      loop: true
    })

    timelineParameters
      .add({
        targets: '.square25',
        translateX: [ { value: 100 }, { value: 200 }, { value: 350 } ],
        translateY: [ { value: 50 }, { value: 100 }, { value: 100 } ],
        duration: 3000
      })
      .add({
        targets: '.square26',
        translateX: [ { value: 100 }, { value: 200 }, { value: 350 } ],
        translateY: [ { value: 50 }, { value: -50 }, { value: -50 } ],
        duration: 3000,
        offset: 200
      })
      .add({
        targets: '.square27',
        translateX: [ { value: 100 }, { value: 350 } ],
        translateY: [ { value: -100 }, { value: -50 }, { value: -50 } ],
        duration: 3000,
        offset: 400
      })
  }

  handleAnimar21 = () => {
    const elRun = this.run.current
    const elUpdate = this.update.current
    const elProgress = this.progress.current
    const elCompleted = this.completed.current

    var update = anime({
      targets: '.square32',
      translateX: 350,
      delay: 1000,
      duration: 4000,
      run: function(anim) {
        elRun.innerHTML = 'Running: Yes'
        elProgress.innerHTML = 'progress : ' + Math.round(anim.progress) + '%'
      },
      update: function(anim) {
        elUpdate.innerHTML = 'Time: ' + Math.round(anim.currentTime) + ' ms'
      },
      complete: function(anim) {
        elRun.innerHTML = 'Running: No'
        elProgress.innerHTML = 'progress : 100%'
        elCompleted.innerHTML = 'Completed: Yes'
      }
    })
  }

  handleAnimar22 = () => {
    const path = anime.path('#motionPath path')

    const motionPath = anime({
      targets: '#motionPath .path1',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 4000,
      loop: true
    })
  }

  handleAnimar23 = () => {
    console.log('bebe')
    const lineDrawing = anime({
      targets: '#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
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

       <p id='importante'> Para controlar una animación, se necesita una 
      instancia para trabajar. 
      La función anime() devuelven una instancia, 
      por lo que puede almacenarla como una variable y luego controlarla muy 
      fácilmente. Estas variables se deben declarar dentro del componente 
       <span id='componentDidMount'> componentDidMount</span> del ciclo de vida 
       de React</p>

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
        <div id='importante2'>charged: 0%</div>
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

      <h2 className='subtitulo'>UNIDADES DE LOS VALORES</h2>

      <p>Podemos usar distintos tipod de unidades al pasar los valores, y 
      tambien diversos tipos de valores. Veamos.</p>

{/************************************************************************/}
      <h3 className='separadorh3'>Unidades</h3>

      <p>Se pueden especificar las unidades que usamos, o pasar valores 
      adimensionales, caso en el cual usa las unidades por defecto del 
      navegador, por ejemplo, para una traslación usa pixeles y para una
      rotación usa grados.</p>

      <img className='ilustracion' src={i20} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square11 green1"></div>
        <div className="square12 blue1"></div>
        <div className="square13 orange1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar12}>Animar</button>
        <span className='label'>Unidades</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Unidades Relativas</h3>

      <p>Para cada propiedad css o cada transformación, le damos una key
      value, en la cual le decimos como se va a modificar esa propiedad 
      respecto al valor original.  Digamos si tenemos un width = 10px y 
      ponemos value como --> '+=20' entonces se le suman 20px y tenemos un
      width = 30px al final de la animación.</p>

      <img className='ilustracion' src={i21} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square14 green1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar13}>Animar</button>
        <span className='label'>Unidades Reativas</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Colores</h3>

      <p>Tambien podemos animar los colores de los elementos.</p>

      <img className='ilustracion' src={i22} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square15 green1"></div>
        <div className="square15 green1"></div>
        <div className="square15 green1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar14}>Animar</button>
        <span className='label'>Colores</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Valor Inicial</h3>

      <p>Podemos especificar un valor inicial para que comience la animación
       distinto al valor que tiene el elemento antes de ser animado. En el 
       ejemplo, el elemento tiene una posición de 0, pero la animación
       comienza en 100.</p>

      <img className='ilustracion' src={i23} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square16 green1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar15}>Animar</button>
        <span className='label'>valor inicial</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Funciones basadas en valores.</h3>

      <p>A cada transformación le podemos asignar una función que maneje sus
       valores. Con "data-x" controlamos cuanto se va a desplazar cada uno.</p>

      <img className='ilustracion' src={i24} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div data-x="160" className="square17 green1"></div>
        <div data-x="80" className="square18 blue1"></div>
        <div data-x="250" className="square19 orange1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar16}>Animar</button>
        <span className='label'>funciones</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Keyframes</h3>

      <p>Son grupos de animaciones que se declaran dentro de un array 
      donde cada elemento es un objeto que define los parámetros de una 
      animación. Debemos sincronizar muy bien la duración y el delay para
       obtener algo bonito.</p>

      <img className='ilustracion' src={i25} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square20 green1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar17}>Animar</button>
        <span className='label'>funciones</span>
      </div>

      <h2 className='subtitulo'>Lineas de Tiempo</h2>

      <p>Debo estudiar la definición de lineas de tiempo.</p>

{/************************************************************************/}
      <h3 className='separadorh3'>Básica</h3>

      <p>Cada elemento ".add" es un paso de la linea de tiempo. Se 
      ejecutan uno despues del otro.</p>

      <img className='ilustracion' src={i26} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square21 green2"></div>
        <div className="square21 blue2"></div>
        <div className="square21 orange2"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar18}>Animar</button>
        <span className='label'>timeline</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Offset</h3>

      <p>Podemos controlar los tiempos en los que cada paso comienza. Tenemos 
      la medida relativa y la absoluta.  En la relativa, los tiempos se toman 
      respecto a la animación anterior, en la absoluta se especifican los 
      tiempos en miliseguntos dentro de la liena de tiempo.</p>

      <img className='ilustracion' src={i27} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square22 green1"></div>
        <div className="square23 blue1"></div>
        <div className="square24 orange1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar19}>Animar</button>
        <span className='label'>offset</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Linea de tiempo con parámetros</h3>

      <p>Cuando deseamos hacer lineas de tiempo complejas, donde cada elemento
      cuenta con varias animaciónes, podemos reunir los distintios estados
      de la animación en cada paso referente a cada objeto. Por ejemplo, si 
      queremos que un cubito se mueva 100px y luego el mismo cubito se mueva
      otros 100px, podemos pasar los dos movimientos como elementos de un 
      array que tiene como valor la key que define la animación. Por ejemplo 
      translateX: [ &#123; value: 100 &#125;, &#123; value: 100 &#125;]. 
      Notemos también que los elementos dentro de las lineas de tiempo 
      heredan las propiedades que se configuran en el objeto que tiene como 
      argumento la función <span className='span1'> anime.timeline() </span>.
      En nuestro ejemplo, los tres elementos heredan la direccion y el loop.</p>

      <img className='ilustracion' src={i28} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square25 green1"></div>
        <div className="square26 blue1"></div>
        <div className="square27 orange1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar20}>Animar</button>
        <span className='label'>parámetros</span>
      </div>

      <h2 className='subtitulo'>Controles</h2>

      <p>Podemos tener botones que controlen el progreso de la animación 
      y en el caso de lineas de tiempo, contar con una barra de progreso, en 
      la cual podemos ver el progreso de la animación y manipularla.</p>

{/************************************************************************/}
      <h3 className='separadorh3'>Botones</h3>

      <p>Veamos el uso de botones play, pause, restart y reverse. Estos son 
      metodos del objeto anime.</p>

      <img className='ilustracion' src={i29} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square28 green1"></div>
        <div className="square28 blue1"></div>
        <div className="square28 orange1"></div>
      </div>

        <div className="botoncitos">
          <button className='btncontrol' 
            onClick={() => {this.control.play()}}>play
          </button>
          <button className='btncontrol' 
            onClick={() => {this.control.pause()}}>pause
          </button>
          <button className='btncontrol' 
            onClick={() => {this.control.restart()}}>Restart
          </button>
          <button className='btncontrol' 
            onClick={() => {this.control.reverse()}}>reverse
          </button>
        </div>

        <span className='label'>Controles</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Linea de tiempo</h3>

      <p>En una linea de tiempo, los botones se usan de la misma manera, 
      veamos como se pone la barra de progreso.</p>

      <img className='ilustracion' src={i30} alt='treeShaking'/>
      <img className='ilustracion' src={i31} alt='treeShaking'/>
      <img className='ilustracion' src={i32} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square29 green1"></div>
        <div className="square30 blue1"></div>
        <div className="square31 orange1"></div>
      </div>

        <div className="botoncitos">
          <button className='btncontrol' 
            onClick={() => {this.controlLineTime.play()}}>play
          </button>
          <button className='btncontrol' 
            onClick={() => {this.controlLineTime.pause()}}>pause
          </button>
          <button className='btncontrol' 
            onClick={() => {this.controlLineTime.restart()}}>Restart
          </button>
          <button className='btncontrol' 
            onClick={() => {this.controlLineTime.reverse()}}>reverse
          </button>
        </div>
        <input className="progress" 
          step="2" type="range" 
          min="0" max="100" defaultValue="0"
        />
        <span className='label'>Controles</span>
      </div>

      <h2 className='subtitulo'>Callback</h2>

      <p> </p>

{/************************************************************************/}
      <h3 className='separadorh3'>Todos los callbacks</h3>

      <p>Tenemos 4 funciones callback que podemos usar para realizar cosas
      dependiendo del estado de la animación. <span className='span1'>begin</span>
      se ejecuta UNA SOLA VEZ cuando se terminal el tiempo de delay. 
      <span className='span1'> run </span> se ejecuta mientras la animación 
      se este ejecutando, pero comienza al terminar el tiempo de delay. 
      <span className='span1'>update</span> Se ejecuta durante toda la animación 
      incluso durante el tiempo de delay. <span className='span1'>complete </span>
      Se corre una vez termine la animación.</p>

      <img className='ilustracion' src={i33} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div>
        <div className="square32 green1"></div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar21}>Animar</button>
        <span className='label'>
          <p ref={this.run}>Running: No</p>
          <p ref={this.progress}>Progress: 0%</p>
          <p ref={this.update}>Time: 0 ms</p>
          <p ref={this.completed}>Completed: No</p>
        </span>
      </div>

      <h2 className='subtitulo'>SVG</h2>

      <p>Manipules imagenes SVG.</p>

{/************************************************************************/}
      <h3 className='separadorh3'>Motion Path</h3>

      <p>Podemos hacer que el moviniento de un elemento siga un camino 
      definido por una imagen SVG.  <span className='span1'>anime.path </span>
      retorna una función de la cual podemos obtener las coordenadas X, Y 
      y los angulos de rotación para le movimiento.</p>

      <img className='ilustracion' src={i34} alt='treeShaking'/>

      <div className='row gruesito'>
        
      <div id="motionPath">
        <div className="motion-path">
          <div className="path1"></div>
          <svg width="256" height="112" viewBox="0 0 256 112">
            <path fill="none" stroke="currentColor" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"></path>
          </svg>
        </div>
      </div>

        <button className='btngreen' onClick={this.handleAnimar22}>Animar</button>
        <span className='label'>Controles</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Dibujando lineas</h3>

      <div className='row gruesito'>

      <div id="lineDrawing"> <svg viewBox="0 0 280 100">
      <g fill="none" fillRule="evenodd" stroke="currentColor" className="lines">
        <path d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z" strokeDasharray="316.85528564453125" style={{strokeDashoffset: "316.4px"}}></path>
        <path d="M73 80V20H58v60h15z" strokeDasharray="150" style={{strokeDashoffset: "150px"}}></path>
        <path d="M58 80V49.77C58.5 33.23 71.58 20 88 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80H58zm75 0V20h-15v60h15z" strokeDasharray="441.1739501953125" style={{strokeDashoffset: "441.174px"}}></path>
        <path d="M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15zm-7.5-60a7.5 7.5 0 1 1-7.48 8v-1c.25-3.9 3.5-7 7.48-7z" strokeDasharray="338.3053894042969" style={{strokeDashoffset: "338.305px"}}></path>
        <path d="M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z" strokeDasharray="406.8699035644531" style={{strokeDashoffset: "406.87px"}}></path>
        <path d="M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z" strokeDasharray="301.8561706542969" style={{strokeDashoffset: "301.856px"}}></path>
        <path d="M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z" strokeDasharray="47.128875732421875" style={{strokeDashoffset: "47.1289px"}}></path>
      </g>
      </svg> </div>

      </div>

      <button className='btngreen' onClick={this.handleAnimar23}>Animar</button>






      </div>

      </div>
    )
  }
}

export default Animejs