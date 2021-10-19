import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/home/Home'
import Foodstuffs from './pages/foodstuffs/Foodstuffs'
import Login from './pages/login/Login'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Activities from './pages/activities/Activities'

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

            <Route path="/foodstuffs">
              <Foodstuffs />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
