import { applyMiddleware, compose, createStore } from 'redux'
import {
  composeWithDevTools,
  RemoteReduxDevToolsOptions,
} from 'remote-redux-devtools'
import { rootReducer, RootState } from './reducer'

const configureStore = () => {
  if (__DEV__) {
    const composeEnhancers = composeWithDevTools({
      realtime: true,
      port: 8082,
    })

    return createStore<RootState>(rootReducer, composeEnhancers())
  } else {
  }
  return createStore<RootState>(rootReducer)
}

export const store = configureStore()
