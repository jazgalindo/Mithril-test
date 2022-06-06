import { createSlice } from '@reduxjs/toolkit'
import { loginAsync } from './actions'

const initialState = {
  user: { password: '', email: '' },
  apiStatus: {
    isLoading: false,
    response: null,
    isSuccess: false,
    errors: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.apiStatus = {
        isLoading: false,
        response: null,
        isSuccess: false,
        errors: null,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.apiStatus = {
          isLoading: true,
          response: null,
          isSuccess: false,
          errors: null,
        }
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.apiStatus = {
          isLoading: false,
          response: action.payload.data,
          isSuccess: true,
          errors: null,
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.apiStatus = {
          isLoading: false,
          response: null,
          isSuccess: false,
          errors: action,
        }
      })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
