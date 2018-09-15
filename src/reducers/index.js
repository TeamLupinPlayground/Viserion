import { combineReducers } from 'redux'
import compReducer from './compReducer.js'

const reducers = combineReducers({
  compReducer: compReducer,
})

export default reducers