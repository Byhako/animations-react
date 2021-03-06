import React, { Component } from 'react'
import { connect } from 'react-redux'

import './app.css'

class Nav extends Component {

  handleChange = text => e => {
    console.log(text)
    this.props.dispatch({ type: 'SET_VIEW', text })
  }

  render () {
    return (
      <div className='nav'>
        <div className='item' onClick={this.handleChange('addons')}>Add Ons</div>
        <div className='item' onClick={this.handleChange('greenSock')}>GreenSock</div>
        <div className='item' onClick={this.handleChange('velocity')}>Velocityjs</div>
        <div className='item' onClick={this.handleChange('amime.js')}>Animejs</div>
        <div className='item' onClick={this.handleChange('popmotion')}>Popmotion</div>
        <div className='item' onClick={this.handleChange('mo.js')}>Mojs</div>
      </div>
    )
  }
}

export default connect()(Nav)