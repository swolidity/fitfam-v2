import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import createBrowserhistory from 'history/lib/createBrowserHistory'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './store'

const history = createBrowserhistory()

render(
  <Provider store={store()}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'))
