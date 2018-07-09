import React, { Component } from 'react'
import TweenMax from "gsap/TweenMax"

import treeShaking from '../../images/treeShaking.png'
import i2 from '../../images/i2.png'
import i3 from '../../images/i3.png'
import i4 from '../../images/i4.png'
import i5 from '../../images/i5.png'
import i6 from '../../images/i6.png'
import i7 from '../../images/i7.png'
import './greenSock.css'


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

  handleAnimate4 = () => {
    //create a TimelineMax and make it repeat 3 times with 1 second between iterations
    const tl = new TimelineMax({repeat:3, repeatDelay:1})

    tl.to(".green5", 1, {x:200})
      //start 1 second after previous tween ends (gap)
      .to(".orange5", 1, {x:200, scale:0.2}, "+=1")
      //add a label at the end
      .addLabel("blueAndRed")
      //start both of these animations at the same time, at the "greyAndPink" label.
      .to(".blue5", 1, {x:220, scale:2, y:20}, "blueAndRed")
      .to(".red5", 1, {x:180, rotation:360}, "blueAndRed")
  }

  componentDidMount () {
    // animo al mancito cuando se carga el componente
    TweenMax.from(".mancito", 3, {x:500, opacity:0.3, scale:2})

    // al cargar el componente, guardamos en variable una animacion
    this.tween = TweenMax.to(".green3", 4, {x:400, 
      rotation:360, ease:Linear.easeNone, paused:true})

    this.tl = new TimelineMax({paused:true})

    this.tl.to(".green6", 1, {x:200})
      .to(".orange6", 1, {x:200, scale:0.2}, "+=1")
      .to(".blue6", 1, {x:200, scale:2, y:20}, "greyAndPink") 
      .to(".red6", 1, {x:200, rotation:360}, "greyAndPink")
  }

  // control animaciones
  handlePlay = () => { this.tween.play() }
  handlePause = () => { this.tween.pause() }
  handleResume = () => { this.tween.resume() }
  handleReverse = () => { this.tween.reverse() }
  handleRestart = () => { this.tween.restart() }

  // control linea de tiempo
  handlePlay2 = () => { this.tl.play() }
  handlePause2 = () => { this.tl.pause() }
  handleResume2 = () => { this.tl.resume() }
  handleReverse2 = () => { this.tl.reverse() }
  handleRestart2 = () => { this.tl.restart() }

  handleRestart3 = () => { this.tl.restart() }
  handleScale02 = () => { this.tl.restart() }
  handleScale1 = () => { this.tl.restart() }
  handleScale4 = () => { this.tl.restart() }


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
          <span className='label'>TweenMax.to 2D</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green2"></div>
          <div className="box2 orange2"></div>
          <div className="box2 blue2"></div>
          <button className='btngreen' onClick={this.handleAnimate2}>Animar</button>
          <span className='label'>TweenMax.to 3D</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <img className='mancito'
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
          />
          <span className='label'>TweenMax.from()</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green3"></div>
           <div className='label'> Controlando animaciones</div>
          <div className="botoncitos">
            <button className='btncontrol' 
              onClick={this.handlePlay}>play()
            </button>
            <button className='btncontrol' 
              onClick={this.handlePause}>pause()
            </button>
            <button className='btncontrol' 
              onClick={this.handleResume}>resume()
            </button>
            <button className='btncontrol' 
              onClick={this.handleReverse}>reverse()
            </button>
            <button className='btncontrol' 
              onClick={this.handleRestart}>restart()
            </button>
          </div>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green4"></div>
          <div className="box2 orange4"></div>
          <div className="box2 blue4"></div>
          <button className='btngreen' onClick={this.handleAnimate3}>Animar</button>
          <span className='label'>Timelines</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green5"></div>
          <div className="box2 orange5"></div>
          <div className="box2 blue5"></div>
          <div className="box2 red5"></div>
          <button className='btngreen' onClick={this.handleAnimate4}>Animar</button>
          <span className='label'>parámetro de posición</span>
        </div>
{/****************************************************************/}
        <div className='row'>
          <div className="box2 green6"></div>
          <div className="box2 orange6"></div>
          <div className="box2 blue6"></div>
          <div className="box2 red6"></div>
          <span className='label'>Control línea de tiempo</span>

          <div className="botoncitos">
            <button className='btncontrol' 
              onClick={this.handlePlay2}>play()
            </button>
            <button className='btncontrol' 
              onClick={this.handlePause2}>pause()
            </button>
            <button className='btncontrol' 
              onClick={this.handleResume2}>resume()
            </button>
            <button className='btncontrol' 
              onClick={this.handleReverse2}>reverse()
            </button>
            <button className='btncontrol' 
              onClick={this.handleRestart2}>restart()
            </button>
          </div>
        </div>
{/****************************************************************/}
        <div className='row'>

          <div className="box2 green7"></div>
          <div className="box2 orange7"></div>
          <div className="box2 blue7"></div>
          <div className="box2 red7"></div>
          <div className="message"></div>
           
          <div className="botoncitos">
            <button className='btncontrol' 
            onClick={this.handleRestart3}>restart()</button>
            <button className='btncontrol' 
            onClick={this.handleScale02}>timeScale(0.2)</button>
            <button className='btncontrol' 
            onClick={this.handleScale1}>timeScale(1)</button>
            <button className='btncontrol' 
            onClick={this.handleScale4}>timeScale(4)</button>
          </div>
        </div>
{/****************************************************************/}


      </div>

{/*//////////////////////////////////////////////////////////////////////////*/}

      <div className='texto'>
      <p id='importante'> Para controlar una animación, se necesita una 
      instancia para trabajar. 
      Los métodos to(), from() y fromTo() devuelven una instancia, 
      por lo que puede almacenarla como una variable y luego controlarla muy 
      fácilmente. Estas variables se deben declarar dentro del componente 
       <span id='componentDidMount'> componentDidMount</span> del ciclo de vida 
       de React</p>
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

      <h2>Metodo de encadenamiento</h2>

      <p>Cuando se aplica una misma linea de tiempo a varios elementos
      pordemos escribirlos todos juntos encadenandolos como:</p>

      <img className='ilustracion' src={i4} alt='treeShaking'/>

      <h2>Control de colocación con el parámetro de posición</h2>

      <p>El secreto para construir secuencias magníficas y precisas es 
      comprender el parámetro de posición. Este único parámetro súper 
      flexible controla la ubicación de sus tweens, etiquetas, devoluciones 
      de llamada, pausas e incluso líneas de tiempo anidadas.</p>

      <img className='ilustracion' src={i5} alt='treeShaking'/>

      <p>Es como un gap, que contorla la secuencia.</p>

      <h2>Control de línea de tiempo</h2>

      <p>Timeline y tweens comparten un conjunto común de métodos de control. 
      Y dado que la cabeza de reproducción de cualquier animación está 
      controlada por su línea de tiempo principal, eso significa que pausar 
      la cabeza de reproducción de una línea de tiempo afecta automáticamente 
      a todos sus hijos. Saltar a un diferente time() o progress() en una 
      línea de tiempo y todos los hijos se mostrarán en consecuencia.</p>

      <h3>Propiedades especiales de la línea de tiempo</h3>
      <p>Las líneas de tiempo también tienen propiedades especiales que 
      puede pasar opcionalmente al constructor para configurarlas. 
       opciones más utilizadas de TimelineMax son:</p>

       <ul>
        <li><b>repeat:</b> el número de veces que se repetirá la animación.</li>
        <li><b>repeatDelay:</b> la cantidad de tiempo (en segundos) entre repeticiones.</li>
        <li><b>yoyo:</b> si es verdadero, la reproducción se alternará 
        hacia adelante y hacia atrás en cada repetición.</li>
        <li><b>delay:</b> el tiempo (en segundos) antes de que comience la 
        línea de tiempo</li>
        <li><b>onComplete:</b> una función para llamar cuando la línea de 
        tiempo ha terminado de reproducirse</li>
       </ul>

      <img className='ilustracion' src={i6} alt='treeShaking'/>
      
      <h3>Métodos Getter / Setter</h3>
      
      <p>Los tweens y las líneas de tiempo no solo comparten callbacks y 
      métodos de control similares, sino que también tienen métodos comunes 
      para obtener y establecer propiedades específicas de la animación. 
      Los métodos getter / setter más comúnmente utilizados son:</p>

      <ul>
      <li><b>time():</b> la posición local de la cabeza lectora 
      (la hora actual, en segundos) sin incluir repeticiones o repeatDelays.</li>
      <li><b>progress():</b> el progreso del tween que es un valor entre 0 y 
      1 que indica la posición del cabezal de reproducción donde 0 es al 
      principio, 0.5 está a medio completar y 1 está al final.</li>
      <li><b>duration():</b> la duración de la animación (en segundos), 
      sin incluir repeticiones o repeatDelays.</li>
      <li><b>delay():</b> la demora inicial de la animación (la cantidad de
       tiempo en segundos antes de que comience la animación).</li>
      </ul>
      
      <p>Estos métodos se pueden usar como setters (al pasar un valor) o 
      getters (omitiendo todos los argumentos). En las muestras de código 
      a continuación, observe que el método de duration() se puede usar 
      exactamente de la misma manera tanto para los tweens como para 
      la línea de tiempo.</p>

      <img className='ilustracion' src={i7} alt='treeShaking'/>

      </div>

    </div>
    )
  }
}

export default GreenSock