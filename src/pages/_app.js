/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import '../layout.css'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Mijn werk is figuratief, met als voornaamste inspiratiebronnen de mens, het landschap en stadstaferelen. Ik hou van een directe aanpak, een monumentale streek en contrastrijk kleurgebruik. Olieverf is mijn favoriete techniek."
        />
        <meta name="build-id" content={process.env.NEXT_PUBLIC_BUILD_ID} />
      </Head>
    </Component>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
