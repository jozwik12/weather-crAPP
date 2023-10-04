import {
  configureStore,
  type Store
} from '@reduxjs/toolkit'
import rootReducer from './reducers/reducersIndex'

const store: Store = configureStore({
  reducer: rootReducer
})

export default store
export type RootState = ReturnType<typeof rootReducer>
