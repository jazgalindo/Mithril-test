import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../containers/User/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
