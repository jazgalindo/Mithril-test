import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { setUser } from '../../containers/User/slice'
import { Colors } from '../../styles/colors'

const Process = () => {
  return (
    <>
      <Layout showHeader>
        <Head>
          <title>Page in process</title>
        </Head>
        <h1> Page in process...</h1>
      </Layout>
      <style jsx>
        {`
          h1 {
            color: ${Colors.bouquet};
            margin: 1rem;
          }
        `}
      </style>
    </>
  )
}

export default Process
