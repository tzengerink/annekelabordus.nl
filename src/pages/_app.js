import Head from 'next/head'
import '../global.css'

const App = ({ Component, props }) => {
    return (
        <Component {...props}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
                    rel="stylesheet"
                />
                <title>Anneke Labordus</title>
            </Head>
        </Component>
    )
}

export default App
