/**
 * @param {object} user
 * @returns object
 */
export const newUser = (user) => {
  const newUser = { password: '', email: '', ...user }
  return newUser
}
