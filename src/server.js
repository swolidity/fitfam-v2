import express from 'express'
import compression from 'compression'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'
import Html from './components/Html'
import path from 'path'
import { Provider } from 'react-redux'
import store from './store'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

const server = express()
const port = process.env.PORT || 5000

server.use(compression())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))
server.set('port', port)

if (process.env.NODE_ENV !== 'production') {
  server.use(morgan('dev'))
}

// connect API middleware
server.use('/api', require('./api/index.js'))

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const data = {
        title: 'Fitfam',
        entry: '/client.js'
      }
      data.body = ReactDOM.renderToString(
        <Provider store={store()}>
          <RoutingContext {...renderProps} />
        </Provider>
      )

      const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
      res.send('<!DOCTYPE html>\n' + html)
    }
  })
})

server.listen(server.get('port'))
