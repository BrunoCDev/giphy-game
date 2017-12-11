import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './styles.css'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Player extends Component {
  constructor (props) {
    super(props)

    this.state = {
      display: '',
      giphy: this.props.giphy || ''
    }

    this.getApiData = this.getApiData.bind(this)
  }

  getApiData () {
    const { label, gameId } = this.props

    const playerNumber = label.split(' ')[1]

    axios
      .post('/api/getApiData', {
        display: this.state.display,
        gameId,
        playerNumber
      })
      .then(result => {
        this.setState({ giphy: result.data[`giphy${playerNumber}`] })
      })
      .catch(console.log)
  }

  render () {
    return (
      <div className='divPlayer2 col s12 m6'>
        <RaisedButton
          className='input-search-button'
          label={this.props.label}
          onClick={this.getApiData}
        />
        <TextField
          inputStyle={{ color: 'white' }}
          hintStyle={{ color: 'white' }}
          hintText='What Giphy do you wanna search?'
          className='input-search'
          onChange={e => this.setState({ display: e.target.value })}
        />

        <div className='giphy-container'>
          {this.state.giphy && (
            <img className='giphy' alt='' src={this.state.giphy} />
          )}
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  giphy: PropTypes.string,
  gameId: PropTypes.string.isRequired
}

export default Player
