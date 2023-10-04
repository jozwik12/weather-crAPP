import { type Reducer, combineReducers } from 'redux'
import appSlice from './appSlice'

const rootReducer: Reducer = combineReducers({
  app: appSlice
})

export default rootReducer
