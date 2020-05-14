import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/Variables.sass'
import './styles/App.sass'

import Home from './pages/Home'
import About from './pages/About'

ReactDOM.render(

  <Router>

    <div>

      <Switch>

        <Route path="/" exact component={ Home } />

        <Route path="/about" component={ About } />

      </Switch>

    </div>

  </Router>,

  document.getElementById('app')

)
