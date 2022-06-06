import { Typography } from '@mui/material'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Alert from '../../components/Alert'
import Layout from '../../components/Layout'
import LoginForm from '../../containers/User/LoginForm'
import { siteTitle } from '../../utils/constans'
import styles from './styles.module.css'

const LoginPage = () => {
  const { apiStatus } = useSelector((state) => state.user)

  return (
    <>
      <Layout>
        <Head>
          <title>Login {siteTitle}</title>
        </Head>
        <div className={styles.mainConatiner}>
          <section className='topConatiner'>
            {apiStatus && apiStatus.errors && !apiStatus.isLoading && (
              <Alert type='error'>
                <Typography>
                  Error when logging in, check that the data is correct!
                </Typography>
              </Alert>
            )}
            {apiStatus && apiStatus.response && !apiStatus.isLoading && (
              <div>
                <Alert type='success'>
                  <Typography>
                    <strong>Successful login !</strong>
                  </Typography>
                </Alert>
              </div>
            )}
          </section>
          <div className={styles.loginContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.imageCover} src='/image.jpeg' />
            </div>
            <div className={styles.loginFormContainer}>
              <LoginForm />
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>
        {`
          p {
            font-size: 0.8rem;
            margin: 1px;
          }
        `}
      </style>
    </>
  )
}

export default LoginPage
