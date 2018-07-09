import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import Addons from '../Animations/Addons'

class Home extends Component {

  render () {
    return (
      <div>
        <Nav/>
        {this.props.view == 'addons' && <Addons/>}
        {this.props.view == 'greenSock' && <p>Hola</p>}
        {this.props.view == 'gsap' && <p>Hola</p>}
        {this.props.view == 'amime.js' && <p>Hola</p>}
        {this.props.view == 'mo.js' && <p>Hola</p>}
        {this.props.view == 'popmotion' && <p>Hola</p>}
        {this.props.view == 'velocity' && <p>Hola</p>}

      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    view: state.view
  }
}


export default connect(mapStateToProps)(Home)