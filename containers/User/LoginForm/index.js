import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Divider } from '@mui/material'
import Link from 'next/link'
import FormElement from '../../../components/FormElement'
import InputForm from '../../../components/InputForm'
import styles from './styles.module.css'
import Form from '../../../components/Form'
import { setUser } from '../slice'
import { Colors } from '../../../styles/colors'
import { siteTitle } from '../../../utils/constans'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const handleChangeUser = (event) => {
    dispatch(setUser({ ...user, [event.target.name]: event.target.value }))
  }

  return (
    <Card className={styles.cardLogin}>
      <h3 className={styles.titleLogin}>{siteTitle}</h3>
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
          <InputForm
            label='Password'
            type='password'
            name='password'
            onChange={handleChangeUser}
            value={user.password}
            validation
          />
        </FormElement>
        <FormElement md={12}>
          <Link href='/process'>
            <a className={styles.linkForgetAccount}>
              Did you forget your account?
            </a>
          </Link>
        </FormElement>
        <FormElement md={12}>
          <Button className={styles.buttonLogin} variant='contained'>
            Login
          </Button>
        </FormElement>
        <FormElement md={12}>
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
