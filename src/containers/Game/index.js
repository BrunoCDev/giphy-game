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
    this.getGameInfo = this.getGameInfo.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.reloadPage = this.reloadPage.bind(this)
  }

  componentDidMount () {
    this.getGameInfo()
  }

  getGameInfo () {
    this.setState({ isLoading: true }, () => {
      const id = this.props.location.pathname.substring(6)
      axios.get(`/api/game/${id}`).then(({ data }) => {
        if (data.error) {
          return this.setState({ error: data.error, isLoading: false })
        }
        return this.setState({ game: data, isLoading: false })
      })
    })
  }

  deleteGame () {
    const id = this.props.location.pathname.substring(6)
    axios.delete(`/api/game/${id}`).then(() => this.props.history.push('/'))
  }

  reloadPage () {
    return window.location.reload()
  }

  render () {
    const { error, isLoading, game } = this.state
    const { history } = this.props

    const gameId = this.props.location.pathname.substring(6)
    const goToHome = () => this.props.history.push('/')

    if (error) return <button onClick={() => history.push('/')}>{error}</button>
    if (isLoading) {
      return <div className='loading-body' />
    }
    return (
      <div className='body'>
        <div className='row'>
          <button className='home-button' onClick={goToHome}>
            Home
          </button>
          <button className='reload-button' onClick={this.reloadPage}>
            Update Score
          </button>
          <button className='delete-button' onClick={this.deleteGame}>
            Delete Game
          </button>
          <Strawpoll
            votes={game.votes}
            url={`https://strawpoll.me/${game.strawpollId}`}
          />
        </div>
        <MuiThemeProvider>
          <div className='players-div row'>
            <Player
              className='player1'
              label='Player 1'
              giphy={game.giphy1}
              gameId={gameId}
            />
            <Player
              className='player2'
              label='Player 2'
              giphy={game.giphy2}
              gameId={gameId}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Game
