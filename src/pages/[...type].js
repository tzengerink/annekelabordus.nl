import Head from 'next/head'
import { useRouter } from 'next/router'
import WORKS from '../config'
import Navigation from '../components/Navigation'
import Slideshow from '../components/Slideshow'

const WorkType = ({ works }) => {
    const router = useRouter()
    const typeName = router.query.type[0]
    const type = WORKS.find((type) => type.name === typeName)

    return (
        <div className="layout">
            <Head>
                <title>Anneke Labordus - {type.label}</title>
            </Head>
            <Navigation />
            <div className="page">
                <Slideshow type={type.name} works={type.works} />
            </div>
        </div>
    )
}

export const getStaticPaths = () => {
    return {
        paths: WORKS.map(({ name }) => ({ params: { type: [name] } })),
        fallback: false,
    }
}

export const getStaticProps = () => ({ props: { works: WORKS } })

export default WorkType
