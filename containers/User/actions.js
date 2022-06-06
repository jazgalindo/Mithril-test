import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from './services'

/**
 * Login function
 * Fuction to consume the API to login user
 */
export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ email, password }) => await login({ email, password })
)
