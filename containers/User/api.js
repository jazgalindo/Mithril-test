
export const login = ({ email = '', password = '' }) => {
    const params = { email, password }
    return PUT(`${COGNITO_URL}/login`, params, logTag, '[login]')
  }