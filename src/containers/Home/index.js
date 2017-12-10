import React from 'react'
import axios from 'axios'

const startNewGame = push =>
  axios.get('/api/newGame').then(result => push(`/game/${result.data}`))

const Home = props => (
  <div>
    <button onClick={() => startNewGame(props.history.push)}>
      START NEW GAME
    </button>
  </div>
)

export default Home
