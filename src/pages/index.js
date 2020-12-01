import Head from 'next/head'
import WORKS from '../config'
import Navigation from '../components/Navigation'

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const HomePage = ({ works }) => {
    const category = randomItem(works)
    const work = randomItem(category.works)

    return (
        <div className="layout">
            <Head>
                <title>Anneke Labordus</title>
            </Head>
            <Navigation />
            <div className="page">
                <img src={`img/${category.name}/${work.filename}`} />
            </div>
        </div>
    )
}

export const getStaticProps = () => ({ props: { works: WORKS } })

export default HomePage
