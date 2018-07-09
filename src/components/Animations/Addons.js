import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import i1 from '../../images/i1.png'
import react from '../../images/react.png'
import './addons.css'

class Addons extends Component {

  state = {items: ['hello', 'world', 'click', 'me']}

  handleAdd = () => {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])
    this.setState({items: newItems})
  }

  handleRemove = (index) => {
    let newItems = this.state.items
    newItems.splice(index, 1)
    this.setState({items: newItems})
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div className='divItem' key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ))

    return (
      <div>
      <div className='container'>

        <div className='section'>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="logo"
            transitionEnter={false}
            transitionLeave={false}>
            <img className='logo' src={react} />
          </ReactCSSTransitionGroup>

          <button className='btnAddons' onClick={this.handleAdd}>Add Item</button>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionEnter={true}
            transitionLeave={true}>
            {items}
          </ReactCSSTransitionGroup>
        </div>

        <div className='section2'>

        </div>
        </div>


        <div className='texto'>
          <p><b>ReactCSSTransitionGroup</b> es una API de alto nivel basada en 
          ReactTransitionGroup y es una manera fácil de realizar transiciones CSS
          y animaciones cuando un componente React ingresa o sale del DOM. El 
          componente se ve como:</p>

          <img className='ilustracion' src={i1}/>

          <p>Se deben configurar algunos props. El componente se renderiza por 
          defecto en una etiqueta <b>span</b> pero puede modificarce diciendo 
          explicitamente en que tipo de etiqueta queremos que se renderize.
           Con <b>transitionName</b> asignamos 
          nombre a la animacion. Con <b>transitionEnterTimeout</b> se configura 
          el tiempo, en milisegundos, que tarda la animacion de un elemento que entra al DOM. 
          Con <b>transitionLeaveTimeout</b> Configuramos el tiempo que tada la 
          animacion de un elemento que sale del DOM. Las propiedades <b>transitionEnter</b>
          y <b>transitionLeave</b> nos dicen si configuraremos o no los tiepos de
          entrada y salida del componente. Por defecto estan en true.</p>

          <p>Luego hay que configurar las animaciones en el CSS. Para ello es 
          necesario tener en cuenta 4 estados, que invocamos como 
          "<span className='span1'>.nombre</span>-<span className='span1'>estado</span>"</p>

         <ul>
            <li>Cuando entra la animacion: <span className='span1'>.example-enter</span></li>
            <li>Cuando termina de entrar, en que estado queda:
                <span className='span1'>.example-enter.example-enter-active</span></li>
            <li>Cuando sale del Dom: <span className='span1'>.example-leave</span></li>
            <li>Cuando termina de salir en que estado queda: 
                <span className='span1'>.example-leave.example-leave-active</span></li>
          </ul>

          <p><b>ReactTransitionGroup</b> es la base de las animaciones. 
          Cuando los childs se agregan o eliminan de forma declarativa,
           se les llama a los ciclos de vida de la animación.</p>

          <ul>
            <li>componentWillAppear()</li>
            <li>componentDidAppear()</li>
            <li>componentWillEnter()</li>
            <li>componentDidEnter()</li>
            <li>componentWillLeave()</li>
            <li>componentDidLeave()</li>
          </ul>

        </div>

      </div>
    )
  }
}

export default Addons