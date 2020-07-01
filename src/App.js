import React, { Component } from 'react'
import './App.css'
import {Hero} from './Hero.jsx'

import Quiz from './Quiz.js'

class App extends Component {
  render() {
    return (
      <div>
      <Hero/>
      <Quiz/>
      </div>
    )
  }
}

export default App