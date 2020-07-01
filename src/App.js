import React, { Component,useState, useEffect } from 'react'
import './App.css'
import {Hero} from './Hero.jsx'

import Quiz from './Quiz.js'


//trying to add timer
// const Game = (props)=>{
//   const [secondsLeft, setSecondsLeft] = useState(10);


//   //useEffect runs every time the component renders, used for creating side-effects. 
//   //Works like a combined componentDidMount, componentDidUpdate and componentWillUnmount
//   //The return statement runs after the render, allowing for cleanup (componentWillUnmount.)
//   useEffect(() => {
//     if (secondsLeft > 0) {
//       //setTimeout is a built in js function that waits to execute a function.
//       const timerId = setTimeout(() => {
//         setSecondsLeft(secondsLeft - 1);
//       }, 1000);
//       return () => clearTimeout(timerId);
//     }
//   });

//   const gameStatus = secondsLeft === 0 ? 'lost' : 'active'
// }


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Hero/>
      <Quiz/>
      </div>

      
    )
  }
}

export default App