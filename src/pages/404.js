import React from 'react'
import Navigation from '../components/Navigation'

const Custom404 = () => {
  return (
    <div className="layout">
      <Navigation />
      <div className="page">
        <h2>Pagina niet gevonden</h2>
        <p>De opgevraagde pagina lijkt niet te bestaan.</p>
      </div>
    </div>
  )
}

export default Custom404
