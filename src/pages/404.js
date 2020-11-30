import Navigation from '../components/Navigation'

const Custom404 = () => {
    return (
        <div className="layout">
            <Navigation />
            <div className="page">
                <h3>Pagina niet gevonden</h3>
                <p>De opgevraagde pagina lijkt niet te bestaan.</p>
            </div>
        </div>
    )
}

export default Custom404
