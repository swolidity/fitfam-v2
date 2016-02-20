import React from 'react'
import { Route } from 'react-router'

import App from './containers/App'
import LoginPage from './containers/LoginPage'

export default (
  <Route path="/" component={App}>
    <Route path="login" component={LoginPage} />
  </Route>
)
