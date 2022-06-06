import { Alert, AlertTitle } from '@mui/material'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import LoginForm from '../../containers/User/LoginForm'
import { Colors } from '../../styles/colors'
import { siteTitle } from '../../utils/constans'

const LoginPage = () => {
  const { apiStatus } = useSelector((state) => state.user)

  return (
    <>
      <Layout>
        <Head>
          <title>Login {siteTitle}</title>
        </Head>
        <div>
          <section className='topConatiner'>
            {apiStatus && apiStatus.errors && !apiStatus.isLoading && (
              <Alert severity='error'>
                Error when logging in, check that the data is correct!
              </Alert>
            )}
            {apiStatus && apiStatus.response && !apiStatus.isLoading && (
              <Alert severity='success'>
                <AlertTitle>Successful login !</AlertTitle>
                <small>{`Email token: ${apiStatus.response.token}`}</small>
              </Alert>
            )}
          </section>
          <LoginForm />
        </div>
      </Layout>
      <style jsx>
        {`
          h1 {
            color: ${Colors.scarlertGum};
            text-align: center;
          }
          div {
            width: 100%;
            display: flex;
            align-items: center;
            text-alingh: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default LoginPage
