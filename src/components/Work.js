/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Work.module.css'

const Work = ({ src, title, size, href }) => {
  let output = (
    <div className={styles.work}>
      <img src={src} alt={title} />
      {title ? <h3>{title}</h3> : ''}
      {size ? <span>{`${size.height}x${size.width} cm`}</span> : ''}
    </div>
  )

  if (href) {
    output = <Link href={href}>{output}</Link>
  }

  return output
}

Work.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.object,
  href: PropTypes.string,
}

export default Work
