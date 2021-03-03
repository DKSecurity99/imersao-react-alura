import { ThemeProvider } from 'styled-components'
import Head from 'next/head';

import db from '../db.json';
import GlobalStyle from '../styles/globals';

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      {/*
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      */}
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
