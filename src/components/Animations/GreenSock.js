import React, { Component } from 'react'
import TweenMax from "gsap/TweenMax"

import treeShaking from '../../images/treeShaking.png'
import i2 from '../../images/i2.png'
import i3 from '../../images/i3.png'
import './greenSock.css'

// var tween = null

class GreenSock extends Component {

  state = {}

  handleAnimate1 = () => {
    TweenMax.to(".box1", 3, {x:400, repeat: 1, yoyo:true})
    TweenMax.to(".green1", 3, {rotation:360, scale:0.5, repeat: 1, yoyo:true})
    TweenMax.to(".orange1", 3, {rotation:-360, scale:0.5, repeat: 1, yoyo:true})
  }

  handleAnimate2 = () => {
    TweenMax.to(".green2", 3, {rotationX:360, repeat: 1, yoyo:true})
    TweenMax.to(".orange2", 3, {rotationY:360, repeat: 1, yoyo:true})
    TweenMax.to(".blue2", 3, {x:100, y:100, scale:2, skewX:45, rotation:180, repeat: 1, yoyo:true})
  }

  handleAnimate3 = () => {
    const tl = new TimelineMax({repeat:30, repeatDelay:1})

    //add 3 tweens that will play in direct succession.
    tl.to(".green4", 1, {x:200})
    tl.to(".orange4", 1, {x:200, scale:0.6})
    tl.to(".blue4", 1, {x:180, scale:0.2})
  }

  componentDidMount () {
    // animo al mancito cuando se carga el componente
    TweenMax.from(".mancito", 3, {x:500, opacity:0.3, scale:2})

    // al cargar el componente, guardamos en variable una animacion
    this.tween = TweenMax.to(".green3", 4, {x:400, 
      rotation:360, ease:Linear.easeNone, paused:true})
  }

  handlePlay = () => { this.tween.play() }
  handlePause = () => { this.tween.pause() }
  handleResume = () => { this.tween.resume() }
  handleReverse = () => { this.tween.reverse() }
  handleRestart = () => { this.tween.restart() }

  render() {

    return (
      <div>
      <div className='containerg'>
{/****************************************************************/}
        <div className='row'>
          <div className="box1 orange1"></div>
          <div className="box1 blue1"></div>
          <div className="box1 green1"></div>
          <button className='btngreen' onClick={this.handleAnimate1}>Animar</button>
          <span className='labelTweenmax'>TweenMax.to 2D</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green2"></div>
          <div className="box2 orange2"></div>
          <div className="box2 blue2"></div>
          <button className='btngreen' onClick={this.handleAnimate2}>Animar</button>
          <span className='labelTweenmax'>TweenMax.to 3D</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <img className='mancito'
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
          />
          <span className='labelTweenmax'>TweenMax.from()</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green3"></div>
           <div className='debajo'> Controlando animaciones</div>
          <div className="botoncitos">
            <button className='btncontrol' 
              onClick={this.handlePlay} id="play">play()
            </button>
            <button className='btncontrol' 
              onClick={this.handlePause} id="pause">pause()
            </button>
            <button className='btncontrol' 
              onClick={this.handleResume} id="resume">resume()
            </button>
            <button className='btncontrol' 
              onClick={this.handleReverse} id="reverse">reverse()
            </button>
            <button className='btncontrol' 
              onClick={this.handleRestart} id="restart">restart()
            </button>
          </div>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div class="box2 green4"></div>
          <div class="box2 orange4"></div>
          <div class="box2 blue4"></div>
          <button className='btngreen' onClick={this.handleAnimate3}>Animar</button>
          <span className='labelTweenmax'>Timelines</span>
        </div>
{/****************************************************************/}





      </div>

{/*//////////////////////////////////////////////////////////////////////////*/}

      <div className='texto'>
      <ul>
      <li><b>TweenLite</b> es una herramienta de animación extremadamente 
      rápida, liviana y flexible que sirve como base de la plataforma de 
      animación GreenSock (GSAP). Una instancia de TweenLite maneja la 
      interpolación de una o más propiedades de cualquier objeto (o matriz 
        de objetos) a lo largo del tiempo.</li>

      <li><b>TweenMax</b>  extiende TweenLite, agregando muchas funciones 
      útiles (pero no esenciales) como repeat (), repeatDelay (), yoyo (), 
      updateTo () y más. También incluye muchos complementos adicionales por
       defecto, lo que lo hace extremadamente completo. Cualquiera de los 
       complementos puede funcionar también con TweenLite, pero TweenMax le 
       ahorra el paso de cargar los comunes como CSSPlugin, RoundPropsPlugin, 
       BezierPlugin, AttrPlugin, DirectionalRotationPlugin y EasePack, 
       TimelineLite y TimelineMax.</li>

      <li><b>TimelineLite</b> es una clase de línea de tiempo ligera e 
      intuitiva para crear y gestionar secuencias de instancias de TweenLite
      , TweenMax, TimelineLite y / o TimelineMax. Puede pensar en una 
      instancia de TimelineLite como un contenedor en el que coloca 
      interpolaciones (u otras líneas de tiempo) a lo largo del tiempo.</li>

      <li><b>TimelineMax</b> extiende TimelineLite, ofreciendo exactamente 
      la misma funcionalidad más funciones útiles (pero no esenciales) como 
      repeat, repeatDelay, yoyo, currentLabel (), tweenTo (), tweenFromTo 
      (), getLabelAfter (), getLabelBefore (), getActive () y más .</li>

      <li><b>Draggable</b> proporciona una manera sorprendentemente sencilla
       de hacer prácticamente cualquier elemento DOM arrastrable, giratorio,
        manejable e incluso desplazable mediante el mouse y / o eventos 
        táctiles, además de que Draggable se integra maravillosamente 
        (y opcionalmente) con ThrowPropsPlugin para que el usuario pueda 
        deslizar y tener el el movimiento se desacelera suavemente según 
        el impulso. </li>

      <li>Algunos bundlers como Webpack ofrecen una función conveniente 
      llamada "tree shaking" que intenta identificar los módulos a los que 
      no hace referencia en ningún lugar de su código, y los elimina del 
      paquete para reducir el tamaño del archivo. Suena genial, pero los 
      complementos de GSAP (como CSSPlugin) no suelen ser referenciados en 
      ningún lugar directamente por los usuarios, por lo que están listos 
      para ser arrancados accidentalmente por sacudidas de árboles. Eso 
      puede romper tus animaciones. ¿La solución? Simplemente haga 
      referencia al complemento en algún lugar de su código, como:</li>
      </ul>

      <img className='ilustracion' src={treeShaking} alt='treeShaking'/>

      <h2>TweenMax.to ()</h2>
      <p>Para crear una animación, TweenMax.to () necesita 3 cosas:</p>

      <ul>
      <li><b>objetivo:</b> el objeto que está animando. Puede ser un objeto
       sin procesar, una matriz de objetos o un texto del selector como 
       ".myClass".</li>
      <li><b>duración:</b> (en segundos)</li>
      <li><b>vars:</b> un objeto con pares de propiedad / valor que está 
      animando (como opacidad: 0.5, rotación: 45, etc.) y otras propiedades
       especiales opcionales como onComplete.</li>
      </ul>

      <li> No soporta unidades viewport</li>

      <h2>from() tweens</h2>
      <p>Anima desde los valores que se le proporcionan, hacia lo que Tiene 
      por defecto.</p>

      <h2>Propiedades especiales y Callbacks.</h2>
      <p>Una propiedad especial es como una palabra clave reservada que 
      GSAP maneja de manera diferente a una propiedad normal (animada).
      Estas son puestas dentro del objeto que tiene como ultima entrada
      cada función tweens. Algunas propiedades son:</p>

      <ul>

      <li><b>delay:</b> Número: cantidad de retraso en segundos (o marcos 
      para interpolaciones basadas en cuadros) antes de que comience 
      la animación.</li>
      <li><b>ease:</b> Ease (o Function o String): puede elegir entre varias
      eases para controlar la velocidad de cambio durante la animación, 
      dándole una "sensación" específica.</li>
      <li><b>repeat:</b> Number - Número de veces que la animación debe 
      repetirse después de su primera iteración.</li>
      <li><b>Yoyo:</b> Booleano: si es verdadero, cada dos ciclos de 
      repetición se ejecutará en la dirección opuesta, de modo que la 
      interpolación parece ir y venir (hacia delante y hacia atrás).</li>
      <li><b>paused:</b> Boolean - Si es verdadero, la animación se 
      detendrá inmediatamente después de la creación.</li>
      <li><b>overwrite:</b> cadena (o entero) - Controla cómo (y si) se
       sobreescriben otras interpolaciones del mismo objetivo. Hay varios
        modos para elegir.</li>
      <li><b>onComplete:</b> Función - Una función que debería invocarse
       cuando la animación se haya completado.</li>
      <li><b>onRepeat:</b> Function - Una función que debe invocarse cada
       vez que se repite la animación.</li>
      <li><b>onStart:</b> Function - Una función que se debe invocar 
      cuando comienza la animación (cuando su tiempo cambia de 0 a algún
       otro valor que puede ocurrir más de una vez si la interpolación se
        reinicia varias veces).</li>
      </ul>

      <h2>Controlando animaciones.</h2>
      <p>Para controlar una animación, necesita una instancia para 
      trabajar. Los métodos to (), from () y fromTo () devuelven una 
      instancia, por lo que puede almacenarla como una variable y luego
       controlarla muy fácilmente:
      </p>

      <img className='ilustracion' src={i2} alt='treeShaking'/>

      <h2>Secuenciación con líneas de tiempo</h2>

      <p>Una línea de tiempo es un contenedor tweens donde se colocan 
      tiempos (como un cronograma). Pueden superponerse o tener espacios 
      entre ellos; tienes control total. A medida que se mueve la cabeza 
      de reproducción de la línea de tiempo, pasa a través de sus
      tweens y los representa en consecuencia. Inserte tantos como desee y
      controle todo el grupo como un todo con los métodos estándar
       (play (), reverse (), pause (), etc.). ¡Incluso puede anidar 
       líneas de tiempo dentro de las líneas de tiempo!</p>

      <h3>Cuándo usar una línea de tiempo</h3>
      <li>Para controlar un grupo de animaciones como un todo</li>
      <li>Para construir una secuencia sin interferir con muchos valores 
      de retardo (compilación progresiva para que los ajustes de 
      temporización de las animaciones anteriores afecten automáticamente a 
      las posteriores, lo que simplifica enormemente la experimentación y 
      el mantenimiento)</li>
      <li>Para modularizar tu código de animación</li>
      <li>Para hacer cualquier tipo de coreografía compleja</li>
      <li>Para generar devoluciones de llamada basadas en un grupo de
      animaciones (como "después de que se hayan realizado todas estas 
      animaciones, llame a myFunction ()")</li>

      <img className='ilustracion' src={i3} alt='treeShaking'/>

      </div>

    </div>
    )
  }
}

export default GreenSock