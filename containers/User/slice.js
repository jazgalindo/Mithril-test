import { createSlice } from '@reduxjs/toolkit'
import { TYPE_STATUS_API } from '../../utils/constans'
import { loginAsync } from './actions'
import { newUser } from './utils'

const initialState = {
  user: newUser({}),
  status: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = TYPE_STATUS_API.LOADING
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.status = TYPE_STATUS_API.SUCCESS
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = TYPE_STATUS_API.FAIL
      })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
