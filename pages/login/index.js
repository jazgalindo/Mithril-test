import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form'
import FormElement from '../../components/FormElement'
import InputForm from '../../components/InputForm'
import Layout from '../../components/Layout'
import LoginForm from '../../containers/User/LoginForm'
import { setUser } from '../../containers/User/slice'
import { Colors } from '../../styles/colors'
import { siteTitle } from '../../utils/constans'
import styles from './styles.module.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const handleChangeUser = (event) => {
    dispatch(setUser({ ...user, [event.target.name]: event.target.value }))
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Login {siteTitle}</title>
        </Head>
        <section>
          <LoginForm />
        </section>
      </Layout>
      <style jsx>
        {`
          h1 {
            color: ${Colors.scarlertGum};
            text-align: center;
          }
          section {
            width: 100%;
            display: flex;
            align-items: center;
            text-alingh: center;
          }
        `}
      </style>
    </>
  )
}

export default LoginPage
