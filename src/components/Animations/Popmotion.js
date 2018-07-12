import React, { Component } from 'react'
import { tween, styler, easing, spring, listen, pointer, value,
  keyframes, physics, transform, decay } from 'popmotion'

import i35 from '../../images/i35.png'
import i36 from '../../images/i36.png'
import i37 from '../../images/i37.png'
import i38 from '../../images/i38.png'
import i39 from '../../images/i39.png'
import i40 from '../../images/i40.png'
import './popmotion.css'

class Popmotion extends Component {
  contador = React.createRef()
  el1 = React.createRef()
  el2 = React.createRef()
  el3 = React.createRef()
  el4 = React.createRef()
  el5 = React.createRef()

  componentDidMount () {
    // **************************************************************
    // **********************  spring  ******************************
    // **************************************************************

    const mass = this.el2.current
    const massStyler = styler(mass);
    const massXY = value({ x: 0, y: 0 }, massStyler.set)

    listen(mass, 'mousedown touchstart')
      .start((e) => {
        e.preventDefault();
        pointer(massXY.get()).start(massXY)
      });

    listen(document, 'mouseup touchend')
      .start(() => {
        spring({
          from: massXY.get(),
          velocity: massXY.getVelocity(),
          to: { x: 0, y: 0 },
          stiffness: 200,
          mass: 5,
          // damping: 10
        }).start(massXY)
      })

    // **************************************************************
    // *********************  physics  ******************************
    // **************************************************************
    const { pipe, clampMax } = transform

    const ball = this.el4.current
    const ballStyler = styler(ball)
    const ballY = value(0, (v) => ballStyler.set('y', Math.min(0, v)))
    const ballScale = value(1, (v) => {
      ballStyler.set('scaleX', 1 + (1 - v))
      ballStyler.set('scaleY', v)
    })
    let count = 0
    let isFalling = false

    const ballBorder = value(
      {
        borderColor: '',
        borderWidth: 0
      },
      ({ borderColor, borderWidth }) => ballStyler.set({
        boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
      })
    )

    const checkBounce = () => {
      if (!isFalling || ballY.get() < 0) return
      
      isFalling = false
      const impactVelocity = ballY.getVelocity()
      const compression = spring({
        to: 1,
        from: 1,
        velocity: - impactVelocity * 0.01,
        stiffness: 800
      }).pipe((s) => {
        if (s >= 1) {
          s = 1;
          compression.stop()
          
          if (impactVelocity > 20) {
            isFalling = true
            gravity
              .set(0)
              .setVelocity(- impactVelocity * 0.5)
          }
        }
        return s
      }).start(ballScale)
    }

    const checkFail = () => {
      if (ballY.get() >= 0 && ballY.getVelocity() !== 0 && ball.innerHTML !== 'Click') {
        count = 0
        tween({
          from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
          to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
        }).start(ballBorder);

        ball.innerHTML = 'Click'
      }
    }

    const gravity = physics({
      acceleration: 2500,
      restSpeed: false
    }).start((v) => {
      ballY.update(v)
      checkBounce(v)
      checkFail(v)
    })

    listen(ball, 'mousedown touchstart').start((e) => {
      e.preventDefault()
      count++
      ball.innerHTML = count
      
      isFalling = true
      ballScale.stop()
      ballScale.update(1)

      gravity
        .set(Math.min(0, ballY.get()))
        .setVelocity(-1200)

      tween({
        from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
        to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
      }).start(ballBorder);
    })
    // **************************************************************
    // **********************  Decay  *******************************
    // **************************************************************

    const slider = this.el5.current
    const divStyler = styler(slider)
    const sliderX = value(0, divStyler.set('x'))

    listen(slider, 'mousedown touchstart')
      .start(() => {
        pointer({ x: sliderX.get() })
          .pipe(({ x }) => x)
          .start(sliderX)
      });

    listen(document, 'mouseup touchend')
      .start(() => {
        decay({
          from: sliderX.get(),
          velocity: sliderX.getVelocity(),
          power: 0.5,
          // timeConstant: 50,
          // restDelta: 0.5,
          // modifyTarget: v => v
        }).start(sliderX)
      })




  }

  contador1 = () => {
    const counter = this.contador.current  // DOM element
    const updateCounter = (v) => counter.innerHTML = Math.round(v)
    tween({ to: 300, duration: 1000 }).start(updateCounter)
  }

  animar1 = () => {
    const square = this.el1.current
    const squareStyler = styler(square)

    tween({
      from: { x: '0px', scale: 1, rotate: 0},
      to: { x: '300px', scale: 2, rotate: 180 },
      ease: easing.easeInOut,
      flip: 3,
      duration: 1000
    }).start(squareStyler.set)
  }

  animar2 = () => {
    const divStyler = styler(this.el3.current)

    keyframes({
      values: [
        { x: 0, y: -100, rotateY: 0, background: '#9B65DE' },
        { x: 300, y: -100, rotateY: 180, rotateX: 0, background: '#14D790' },
        { x: 300, y: 100, rotateY: 180, rotateX: 180, background: '#FF1C68' },
        { x: 0, y: 100, rotateY: 0, rotateX: 180, background: '#198FE3' },
        { x: 0, y: -100, rotateY: 0, rotateX: 0, background: '#9B65DE' }
      ],
      duration: 3000,
      easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
      loop: Infinity,
      //times: [0, 0.2, 0.5, 0.6, 1]
    }).start(divStyler.set)
  }

  render() {
    return (
      <div>
      <div className='texto'>
      <p>Popmotion es una navaja suiza de 11.5 KB para animadores que 
      apuntan a ser bloques de lego, y viene con paquetes para mezclar, 
      arrastrar, posar, reaccionar y hilar. Sin embargo, una biblioteca de 
      movimiento de JavaScript funcional y reactiva que proporciona métodos 
      para interpolar, la documentación puede ser una tarea difícil de 
      descifrar; styler es específicamente difícil de abarcar debido a la 
      breve y vaga explicación.</p>

      <p>También debería sentirse cómodo escribiendo en ES6 como todas las 
      demos, y los ejemplos de código se escriben de esta manera. La 
      sintaxis general de esta biblioteca es ciertamente confusa, y la 
      redacción de la documentación es compleja, lo que requiere una 
      comprensión profunda del proyecto por dentro y por fuera. Dado que 
      lo más probable es que requiera una sólida comprensión de cómo se 
      escribe esta biblioteca, podría tardar un tiempo en recuperarse si t
      iene prisa.</p>

      <p>Popmotion ciertamente tiene capacidades cuando se trata de 
      animaciones reactivas basadas en la posición del mouse, y cualquier 
      cosa que no esté basada en la duración.</p>

      <p>Un tween (interpolación) es una función que cambia un número a 
      otro, durante un período de tiempo determinado. Por defecto, un 
      tween cambiará de 0 a 1 en 300 milisegundos, pero podemos cambiarlo
      pasandole argumentos a la función.</p>

      <img className='ilustracion' src={i35} alt='imagen'/>

      <div className='row'>
        <div className="object" ref={this.contador}>0</div>
        <button className='btngreen' onClick={this.contador1}>Animar</button>
        <span className='label'>tween</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Animación básica</h3>

       <p>Cuando se llama a set, programa una renderización en el siguiente 
       fotograma. Todos los renders se procesan por lotes para evitar que 
       se agote el diseño. <span className='span1'>Es importante poner el 
       estado de la animación tanto en from como en to.  Por ejemplo en 
       este caso, si en from no ponemos rotate: 0, el elemento solo 
       rotara al regresar a su posición original, y no al inicio de la 
       animación</span></p>

      <img className='ilustracion' src={i36} alt='treeShaking'/>

      <div className='row'>
        <div className="object green1" ref={this.el1}></div>
        <button className='btngreen' onClick={this.animar1}>Animar</button>
        <span className='label'>básica</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Spring</h3>

       <p>Una simulación precisa de un resorte con las mismas ecuaciones 
       que CASpringAnimation de Apple. Podemos mover la bolita con el mouse 
       y a la animación pasarle parametros como la riguidez del resoerte, 
       la masa de la bolita, o el amortuguamiento. </p>

      <img className='ilustracion' src={i37} alt='treeShaking'/>

      <div className='row'>
        <div className="ball orange1" ref={this.el2}></div>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Keyframes</h3>

       <p>Anima a través de múltiples estados secuenciales con todo el 
       poder de una sola interpolación. </p>

      <img className='ilustracion' src={i38} alt='treeShaking'/>

      <div className='row alto'>
        <div className="object green1" ref={this.el3}></div>
        <button className='btngreen' onClick={this.animar2}>Animar</button>
        <span className='label'>keyframe</span>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Física</h3>

       <p>Una simulación de física integrada y liviana que se puede modificar 
       a mitad de la animación. </p>

      <img className='ilustracion' src={i39} alt='treeShaking'/>

      <div className='row alto piso'>
        <div className="ball orange1 rebota" ref={this.el4}>Click</div>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Decay</h3>

       <p>Cuando tenemos una gran cantidad de elementos y queremos porder verlos
       pero sin hacer scroll, podemos mover solo los elementos hacia los lados 
       con el mouse, como un carrusel. <span className='span1'> Tiene el 
       inconveniente de que si sacamos los elementos de la pantalla no podemos 
       recuperarlos. </span> power da una medida de la "inercia", entre más 
       grande, menor inercia. timeConstant configura el tiempo que tarda el 
       carrusel en detenerse una vez lo "empujamos". modifyTarget, es una 
       función que recibe el objetivo calculado y devuelve uno nuevo. 
       Útil para ajustar el objetivo a una grilla, por ejemplo. </p>

      <img className='ilustracion' src={i40} alt='treeShaking'/>

      <div className="carousel" ref={this.el5}>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
      </div>

{/************************************************************************/}
      <h3 className='separadorh3'>Every Frame</h3>

       <p>Dispara una vez cada fotograma con el último framestamp. </p>

      <img className='ilustracion' src={i39} alt='treeShaking'/>

      <div className='row alto piso'>
        <div class="balls">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
      </div>





      

          

        </div>

      </div>
    )
  }
}

export default Popmotion