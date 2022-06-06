import fakeApi from '../../api/fakeApi'

/**
 * Login function
 */
export const login = async ({ email = '', password = '' }) => {
  const params = { email, password }
  return fakeApi.post('/user/login', params)
}
