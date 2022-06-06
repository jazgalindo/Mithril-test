import { createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "./api"

export const loginAsync = createAsyncThunk(
    'user/login',
    async ({ email, password }) => await login({ email, password })
  )