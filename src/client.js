import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import createBrowserhistory from 'history/lib/createBrowserHistory'
import routes from './routes'

const history = createBrowserhistory()

render(<Router history={history}>{routes}</Router>, document.getElementById('app'))
