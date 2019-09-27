import './main.css'
import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import Layout from 'containers/layout'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout></Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)