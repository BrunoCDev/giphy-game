import React from 'react'
import axios from 'axios'
import './styles.css'

const startNewGame = push =>
  axios.put('/api/newGame').then(result => push(`/game/${result.data}`))

const Home = props => (
  <div className='home-container'>
    <button
      className='start-button'
      onClick={() => startNewGame(props.history.push)}
    >
      START NEW GAME
    </button>
  </div>
)

export default Home
