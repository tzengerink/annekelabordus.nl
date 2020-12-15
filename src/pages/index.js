import React from 'react'
import Head from 'next/head'
import { WORKS } from '../config'
import Navigation from '../components/Navigation'
import Work from '../components/Work'

const HomePage = () => {
    const config = {
        portret: 'debbie-en-rick-70x40cm.jpg',
        landschap: 'camino-de-santiago--cirauqui-60x80cm.jpg',
        stadsgezicht: 'kippenbrug-weesp-60x80cm.jpg',
        project: 'kleuren-maken-de-wereld-mooier-300x110cm.jpg',
    }

    const items = WORKS.map((category) => ({
        category: {
            name: category.name,
            label: category.label,
        },
        work: category.works.find((work) => work.filename === config[category.name]),
    }))

    return (
        <div className="layout">
            <Head>
                <title>Anneke Labordus</title>
            </Head>
            <Navigation />
            <div className="page">
                {items.map((item) => (
                    <Work
                        key={item.category.name}
                        href={`/${item.category.name}`}
                        src={`img/${item.category.name}/${item.work.filename}`}
                        title={item.work.title}
                        size={item.work.size}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage
