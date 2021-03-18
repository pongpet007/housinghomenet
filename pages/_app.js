
import '../styles/header.css'
import '../styles/globals.css'
import React from "react"
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import Head from 'next/head'
import { wrapper } from "../redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>       
          <meta charSet="UTF-8" />         
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name="author" content="สินค้าอุตสาหกรรม Brandex Directory Co., Ltd." />
          <meta name="robots" content="index,follow" />   
          <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>
              
      </Head>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
