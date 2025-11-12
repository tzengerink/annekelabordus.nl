import React from 'react'
import Head from 'next/head'
import { WORKS, PROJECTS } from '../config'
import Navigation from '../components/Navigation'
import Work from '../components/Work'

const HomePage = () => {
  const config = {
    portret: 'julia-70x50cm.jpg',
    landschap: 'langs-het-pieterpad--groningen-60x80cm.jpg',
    stadsgezicht: 'kippenbrug-weesp-60x80cm.jpg',
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
        {PROJECTS.map((project) => {
          const work = project.works[0]
          return (
            <Work
              key={project.name}
              href={`/project/${project.name}`}
              src={`img/project/${project.name}/${work.filename}`}
              title={work.title}
              size={work.size}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
