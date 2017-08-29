import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

import reducers from '../reducers'

const reducer = combineReducers({
  ...reducers
})

export default () => {
  if (window.AppEnv == 'development') {
    const logger = createLogger()

    const store = createStore(
      reducer,
      applyMiddleware(thunk, promise, logger)
    )

    return store
  } else {
    const store = createStore(
      reducer
    )
    return store
  }
}
