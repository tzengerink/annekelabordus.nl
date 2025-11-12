import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { WORKS } from '../config'
import Navigation from '../components/Navigation'
import Slideshow from '../components/Slideshow'

const Category = ({ works }) => {
  const router = useRouter()
  const name = router.query.category[0]
  const category = works.find((cat) => cat.name === name)
  const title = `Anneke Labordus - ${category.label}`

  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <div className="page">
        <Slideshow folder={category.name} works={category.works} />
      </div>
    </div>
  )
}

Category.propTypes = { works: PropTypes.array }

export const getStaticPaths = () => {
  return {
    paths: WORKS.map(({ name }) => ({ params: { category: [name] } })),
    fallback: false,
  }
}

export const getStaticProps = () => ({ props: { works: WORKS } })

export default Category
