import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'

import Player from '../../components/Player'
import Strawpoll from '../../components/Strawpoll'

class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: {},
      error: '',
      isLoading: true
    }
  }

  componentDidMount () {
    const id = this.props.location.pathname.substring(6)
    axios.get(`/api/game/${id}`).then(({ data }) => {
      if (data.error) {
        return this.setState({ error: data.error, isLoading: false })
      }
      return this.setState({ game: data, isLoading: false })
    })
  }

  render () {
    const { error, isLoading, game } = this.state
    const { history } = this.props

    if (error) return <button onClick={() => history.push('/')}>{error}</button>
    if (isLoading) return <h1>Loading...</h1>
    return (
      <div className='body'>
        <div className='row'>
          <Strawpoll
            votes={game.votes}
            url={`https://strawpoll.me/${game.strawpollId}`}
          />
        </div>
        <MuiThemeProvider>
          <div className='players-div row'>
            <Player label='Player 1' giphy={game.giphy1} />
            <Player label='Player 2' giphy={game.giphy2} />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Game
