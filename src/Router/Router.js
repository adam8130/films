import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Views/Home/Home'
import Cinemas from '../Views/Cinemas/Cinemas'
import Profile from '../Views/Profile/Profile'



export default function Router(props) {
  return (
      <HashRouter>
          {props.children}
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/cinemas' component={Cinemas}/>
              <Route path='/profile' component={Profile}/>
              <Redirect from='/' to='/home'/>
          </Switch>
      </HashRouter>
  )
}
