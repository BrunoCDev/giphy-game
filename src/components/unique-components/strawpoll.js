import React, { Component } from 'react'
import axios from 'axios'

export default class Strawpoll extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      vote1: 0,
      vote2: 0
    }

    this.getVotes = this.getVotes.bind(this)
    this.updateID = this.updateID.bind(this)
  }
  getVotes () {
    axios
      .get(`/api/getVotes/${this.state.id}`)
      .then(({ data }) => {
        this.setState({ vote1: data[0] })
        this.setState({ vote2: data[1] })
        this.setState({ id: '' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateID (val) {
    this.setState({ id: val })
  }

  render () {
    return (
      <div>
        <h1 className='vote1score'>Score: {this.state.vote1}</h1>
        <button className='button-get-votes' onClick={this.getVotes}>
          Get Score
        </button>
        <input
          className='insert-id'
          onChange={e => {
            this.updateID(e.target.value)
          }}
        />
        <h1 className='vote2score'>Score: {this.state.vote2}</h1>
      </div>
    )
  }
}
