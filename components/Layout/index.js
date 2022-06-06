import Head from 'next/head'
import { Colors } from '../../styles/colors'
import { siteTitle } from '../../utils/constans'
import Header from '../Header'
const name = 'Andrea Jazmin Galindo Vazquez'

const Layout = ({ children, showHeader }) => {
  return (
    <>
      <div>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='This page will help you create life experiences, where losing yourself is finding yourself.'
          />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <title>{siteTitle}</title>
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
        </Head>
        {showHeader && <Header />}
        <main>{children}</main>
        <footer>
          <i>
            This page will help you create life experiences, where losing
            yourself is finding yourself
          </i>
        </footer>
      </div>
      <style jsx>
        {`
          div {
            min-height: 100vh;
            background: ${Colors.tutu};
            padding-bottom: 5rem;
          }
          footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: white;
            color: ${Colors.wisteria};
            text-align: center;
            font-size: smaller;
          }
        `}
      </style>
    </>
  )
}

export default Layout
