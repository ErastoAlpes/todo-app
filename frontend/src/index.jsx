/**
 * É NO INDEX QUE É FEITA A INTEGRACAO ENTRE REACT E REDUX
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
//o middle 'mult' dispara as acoes em paralelo (sem assicronismo)
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

///////////////////integracao plugin chrome redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
////////////////////////////////////////////////

//a store recebe o resultado do createStore
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)
