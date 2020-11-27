import { useRouter } from 'next/router'
import CONFIG from '../config'
import Navigation from '../components/Navigation'
import Slideshow from '../components/Slideshow'

const WorkType = ({ images }) => {
    const router = useRouter()
    const type = router.query.type[0]

    return (
        <div className="layout">
            <Navigation />
            <div className="page">
                <Slideshow type={type} images={images[type]} />
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
