import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import notifReducer from './reducers/notifReducer'
import weatherReducer from './reducers/weatherReducer'
import visitorReducer from './reducers/visitorReducer'
import visitorsAllReducer from './reducers/visitorsAllReducer'
import visitorEditReducer from './reducers/visitorEditReducer'

const appReducer = combineReducers({
  user: userReducer,
  notif: notifReducer,
  weather:weatherReducer,
  visitor:visitorReducer,
  visitors:visitorsAllReducer,
  visitorEdit:visitorEditReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
