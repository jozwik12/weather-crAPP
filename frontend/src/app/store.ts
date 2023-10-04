import {
  configureStore,
  type Store
} from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store: Store = configureStore({
  reducer: rootReducer
})

export default store
