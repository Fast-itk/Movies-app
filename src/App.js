import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import AboutPage from './pages/AboutPage'
import Layout from './hoc/Layout'
import RandomState from './context/random/randomState'
import SearchState from './context/search/searchState'
import DetailState from './context/detail/detailState'
import HomeState from './context/home/homeState'

function App() {
  return (
    <SearchState>
      <HomeState>
        <DetailState>
          <RandomState>
            <BrowserRouter>
              <Layout>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" exact component={AboutPage} />
                  <Route path="/detail/:id" exact component={DetailPage} />
                </Switch>
              </Layout>
            </BrowserRouter>
          </RandomState>
        </DetailState>
      </HomeState>
    </SearchState>
  )
      
}

export default App;
