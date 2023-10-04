import { createSlice, type Slice } from '@reduxjs/toolkit'

interface AppState {
  isDarkModeEnabled: boolean
}

const initialState: AppState = {
  isDarkModeEnabled: false
}

const appSlice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state: AppState) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled
    }
  }
})

export const { toggleDarkMode } = appSlice.actions
export default appSlice.reducer
