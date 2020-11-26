import Navigation from '../components/Navigation'

const randomProp = (obj) => {
    const keys = Object.keys(obj)
    return keys[(keys.length * Math.random()) << 0]
}

const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const HomePage = ({ images }) => {
    const randomFolder = randomProp(images)
    const randomImage = randomItem(images[randomFolder])

    return (
        <div className="layout">
            <Navigation />
            <div className="page">
                <img src={`img/${randomFolder}/${randomImage}`} />
            </div>
        </div>
    )
}

export { getStaticProps } from '../lib'

export default HomePage
