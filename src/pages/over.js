import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'

const Over = () => {
  return (
    <div className="layout">
      <Head>
        <title>Anneke Labordus - Over</title>
        <meta name="build-id" content={process.env.NEXT_PUBLIC_BUILD_ID} />
      </Head>
      <Navigation />
      <div className="page">
        <p>
          In Leiden (1952) ben ik geboren. Mijn opleiding vrije grafiek en schilderen volgde ik aan de Gerrit
          Rietveldacademie te Amsterdam. In 2005 ontving ik de Weesper Cultuurprijs.
        </p>
        <p>
          Mijn werk is figuratief, met als voornaamste inspiratiebronnen de mens, het landschap en stadstaferelen. Ik
          hou van een directe aanpak, een monumentale streek en contrastrijk kleurgebruik. Olieverf is mijn favoriete
          techniek.
        </p>
        <p>
          Portretten maken een belangrijk onderdeel uit van mijn werk. Wat me boeit in het maken van een portret is de
          ontmoeting met een ander mens. Tijdens het portretteren ontwikkelt zich een relatie, die nodig is om erachter
          te komen, wie en wat er achter het model schuilt.
        </p>
        <p>
          Het portret is nooit een fotografische weergave van ogen, neus en mond, de vorm en verhoudingen, maar het
          vastleggen van het meest wezenlijke van de persoon. De manier van kijken en de houding zijn daarbij
          essentieel. Gelijkenis is een streven. Maar belangrijker is toch, dat het een boeiend schilderij wordt, dat
          emotie bij de toeschouwer teweegbrengt.
        </p>
        <p>
          E-mail: <a href="mailto: annekelabordus@gmail.com">annekelabordus@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Over
