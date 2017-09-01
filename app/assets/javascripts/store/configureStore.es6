import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

import reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
  form: formReducer
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
