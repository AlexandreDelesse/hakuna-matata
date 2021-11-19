import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/home/Home'
import Foodstuffs from './pages/foodstuffs/Foodstuffs'
import Login from './pages/login/Login'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Activities from './pages/activities/Activities'
import Timer from './components/timer/Timer'
import Workout from './pages/workout/Workout'
import Exercices from './pages/exercices/Exercices'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Switch>
            {/* <Route path="/">
              <Redirect to="/login" />
            </Route> */}

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/timer">
              <Timer />
            </Route>

            <Route path="/foodstuffs">
              <Foodstuffs />
            </Route>

            <Route path="/workout">
              <Workout />
            </Route>

            <Route path="/activities">
              <Activities />
            </Route>

            <Route path="/exercices" >
              <Exercices />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
