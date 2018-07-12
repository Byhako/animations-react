import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import Addons from '../Animations/Addons'
import GreenSock from '../Animations/GreenSock'
import Animejs from '../Animations/Animejs'
import Mojs from '../Animations/Mojs'
import Popmotion from '../Animations/Popmotion'
import Velocity from '../Animations/Velocity'

class Home extends Component {

  render () {
    return (
      <div>
        <Nav/>
        {this.props.view == 'addons' && <Addons/>}
        {this.props.view == 'greenSock' && <GreenSock/>}
        {this.props.view == 'amime.js' && <Animejs/>}
        {this.props.view == 'mo.js' && <Mojs/>}
        {this.props.view == 'popmotion' && <Popmotion/>}
        {this.props.view == 'velocity' && <Velocity/>}
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