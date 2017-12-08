import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import Main from './components/Main'
import './style.css'

render(<Router history={browserHistory}>
  <Route path="/" component={Main}></Route>  
</Router>, document.getElementById('root'))
