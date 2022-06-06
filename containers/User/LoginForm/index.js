import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Divider, LinearProgress } from '@mui/material'
import InputPasswordForm from '../../../components/InputPasswordForm'
import FormElement from '../../../components/FormElement'
import InputForm from '../../../components/InputForm'
import Form from '../../../components/Form'
import { siteTitle } from '../../../utils/constans'
import { loginAsync } from '../actions'
import { setUser } from '../slice'
import styles from './styles.module.css'

/**
 * Login form
 */
const LoginForm = () => {
  const dispatch = useDispatch()
  const { user, apiStatus } = useSelector((state) => state.user)

  /**
   * handleChangeUser
   * Handler on change value in input
   * @param {object} evt Change event
   */
  const handleChangeUser = (event) => {
    dispatch(setUser({ ...user, [event.target.name]: event.target.value }))
  }

  /**
   * handleClickLogin
   * Handler on click to login user
   * @param {object} evt Change event
   */
  const handleClickLogin = () => {
    dispatch(loginAsync(user))
  }

  return (
    <Card className={styles.cardLogin}>
      <h2 className={styles.titleLogin}>{siteTitle}</h2>

      <Form>
        <FormElement md={12}>
          <InputForm
            name='email'
            label='Email'
            onChange={handleChangeUser}
            value={user.email}
            placeholder='my.email@test.com'
            validation
          />
        </FormElement>
        <FormElement md={12}>
          <InputPasswordForm
            label='Password'
            name='password'
            onChange={handleChangeUser}
            value={user.password}
            validation
          />
        </FormElement>
        <FormElement md={12}>
          <a href='/process' className={styles.linkForgetAccount}>
            Did you forget your account?
          </a>
        </FormElement>
        <FormElement md={12}>
          <Button
            disabled={!user.email || !user.password}
            className={styles.buttonLogin}
            variant='contained'
            onClick={handleClickLogin}
          >
            Login
          </Button>
        </FormElement>
        <FormElement md={12}>
          {apiStatus && apiStatus.isLoading && <LinearProgress />}
          <Divider />
        </FormElement>
        <FormElement md={12}>
          <Button
            href='/process'
            variant='contained'
            color='secondary'
            className={styles.buttonCreateAccount}
          >
            Create account
          </Button>
        </FormElement>
      </Form>
    </Card>
  )
}

export default LoginForm
