import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { PROJECTS } from '../../config'
import Navigation from '../../components/Navigation'
import Slideshow from '../../components/Slideshow'

const Project = ({ projects }) => {
  const router = useRouter()
  const name = router.query.name[0]
  const project = projects.find((prj) => prj.name === name)
  const title = `Anneke Labordus - ${project.title ? project.title : project.label}`

  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <div className="page">
        <Slideshow
          folder={`project/${project.name}`}
          works={project.works}
          title={title}
          statement={project.statement}
        />
      </div>
    </div>
  )
}

Project.propTypes = { projects: PropTypes.array }

export const getStaticPaths = () => {
  return {
    paths: PROJECTS.map(({ name }) => ({ params: { name: [name] } })),
    fallback: false,
  }
}

export const getStaticProps = () => ({ props: { projects: PROJECTS } })

export default Project
