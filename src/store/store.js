import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer/index'
import themeReducer from './themeReducer/index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
})