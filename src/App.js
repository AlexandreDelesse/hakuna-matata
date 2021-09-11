import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Foodstuffs from './pages/foodstuffs/Foodstuffs'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/foodstuffs' >
            <Foodstuffs />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
