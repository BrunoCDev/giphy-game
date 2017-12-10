import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'
import Game from './containers/Game'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/game/:id' component={Game} />
      <Route exact path='/' component={Home} />
    </div>
  </BrowserRouter>
)

export default App
