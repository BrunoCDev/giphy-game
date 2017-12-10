import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Player from '../../components/Player'
import Strawpoll from '../../components/unique-components/strawpoll'
import '../../components/unique-components/strawpoll.css'

const Game = () => (
  <div className='body'>
    <div className='row'>
      <Strawpoll />
    </div>
    <MuiThemeProvider>
      <div className='players-div row'>
        <Player label='Player 1' />
        <Player label='Player 2' />
      </div>
    </MuiThemeProvider>
  </div>
)

export default Game
