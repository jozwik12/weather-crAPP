import {
  configureStore,
  combineReducers,
  type Reducer,
  type Store
} from '@reduxjs/toolkit'

const rootReducer: Reducer = combineReducers({})

const store: Store = configureStore({
  reducer: rootReducer
})

export default store
