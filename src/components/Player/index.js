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
      giphy: ''
    }

    this.getApiData = this.getApiData.bind(this)
  }

  getApiData () {
    axios
      .post('/api/getApiData', { display: this.state.display })
      .then(result => {
        this.setState({ giphy: result.data.data[0].images.original.webp })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    console.log(this.state.giphy)
    return (
      <div className='divPlayer2 col s12 m6'>
        <RaisedButton
          className='input-search-button2'
          label={this.props.label}
          onClick={this.getApiData}
        />
        <TextField
          inputStyle={{ color: 'white' }}
          hintStyle={{ color: 'white' }}
          hintText='What Giphy do you wanna search?'
          className='input-search2'
          onChange={e => this.setState({ display: e.target.value })}
        />

        <div className='giphy-container2'>
          {this.state.giphy && (
            <img className='giphy2' alt='' src={this.state.giphy} />
          )}
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  label: PropTypes.string.isRequired
}

export default Player
