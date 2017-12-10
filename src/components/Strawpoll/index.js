import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import './styles.css'

const Strawpoll = ({ votes, url }) => (
  <div>
    <h1 className='vote1score'>
      Score: {votes[0]} - {votes[1]}
    </h1>

    <a href={url} target='__blank'>
      Vote now!
    </a>
  </div>
)

Strawpoll.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  url: PropTypes.string.isRequired
}

export default Strawpoll
