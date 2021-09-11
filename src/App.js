import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/home/Home'
import Foodstuffs from './pages/foodstuffs/Foodstuffs'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const queryClient = new QueryClient()

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/foodstuffs">
            <QueryClientProvider client={queryClient}>
              <Foodstuffs />
            </QueryClientProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
