import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import FavoritesPage from './pages/FavoritesPage'
import AboutPage from './pages/AboutPage'
import Layout from './hoc/Layout'
import RandomState from './context/random/randomState'
import SearchState from './context/search/searchState'

function App() {
  return (
    <SearchState>
      <RandomState>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/favorites" exact component={FavoritesPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/detail/:id" exact component={DetailPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </RandomState>
    </SearchState>
  )
      
}

export default App;
