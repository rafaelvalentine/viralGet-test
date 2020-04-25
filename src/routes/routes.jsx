import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * pages
 */ 

 import Home from '../pages/home'
//  import Cats from '../containers/cats'
//  import LOTR from '../containers/lotr'
//  import NotFound from '../tools/Error/404error'

const Router = () => (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )

export default Router