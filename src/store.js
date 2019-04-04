import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import count from './reducers/count'
import api from './reducers/api'

const rootReducer = combineReducers({count, api})

const logger1 = store => next => action => {
  console.log('1 dispatching ', action)
  next(action)
  console.log('1 new state', store.getState())
}

const logger2 = store => next => action => {
  console.log('2 dispatching ', action)
  next(action)
  console.log('2 new state', store.getState())
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger1, thunk, logger2)))

export default store