import Head from 'next/head'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import Navigation from '../components/Navigation'
import Slideshow from '../components/Slideshow'

const WorkType = ({ images }) => {
    const router = useRouter()
    const typeName = router.query.type[0]
    const type = CONFIG.workTypes.find((type) => type.name === typeName)

    return (
        <div className="layout">
            <Head>
                <title>Anneke Labordus - {type.label}</title>
            </Head>
            <Navigation />
            <div className="page">
                <Slideshow type={type.name} images={images[type.name]} />
            </div>
        </div>
    )
}

export const getStaticPaths = () => {
    return {
        paths: CONFIG.workTypes.map((type) => ({ params: { type: [type.name] } })),
        fallback: false,
    }
}

export { getStaticProps } from '../lib'

export default WorkType
