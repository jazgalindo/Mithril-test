import { AlertTitle } from '@mui/material'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Alert from '../../components/Alert'
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
              <Alert type='error'>
                <p>Error when logging in, check that the data is correct!</p>
              </Alert>
            )}
            {apiStatus && apiStatus.response && !apiStatus.isLoading && (
              <Alert type='success'>
                <p>
                  <strong>Successful login !</strong>
                  {` Email token: ${apiStatus.response.token}`}
                </p>
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
          p {
            font-size: 12px;
            margin: 1px;
          }
        `}
      </style>
    </>
  )
}

export default LoginPage
