import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/home/Home'
import Foodstuffs from './pages/foodstuffs/Foodstuffs'

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
            <Route exact path="/">
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
