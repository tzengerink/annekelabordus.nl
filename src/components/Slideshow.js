/* eslint-disable @next/next/no-img-element */
import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Work from './Work'
import styles from './Slideshow.module.css'

const Slideshow = ({ folder, works, title, statement }) => {
  let touchStartX
  const STATEMENT_INDEX = 'statement'
  const [activeIndex, setActiveIndex] = useState(null)

  const isActive = (index) => {
    if (index === STATEMENT_INDEX && statement?.length) return [null, STATEMENT_INDEX].includes(activeIndex)
    if (!statement?.length && activeIndex === null) return index === 0
    return activeIndex === index
  }

  const previous = () => {
    if (activeIndex === null) return setActiveIndex(statement?.length ? STATEMENT_INDEX : 0)
    if (activeIndex === STATEMENT_INDEX) return setActiveIndex(works.length - 1)
    if (activeIndex === 0 && statement?.length) return setActiveIndex(STATEMENT_INDEX)
    if (activeIndex === 0) return setActiveIndex(works.length - 1)
    setActiveIndex(activeIndex - 1)
  }

  const next = () => {
    if (activeIndex === null) return setActiveIndex(statement?.length ? 0 : 1)
    if (activeIndex === STATEMENT_INDEX) return setActiveIndex(0)
    if (activeIndex === works.length - 1 && statement?.length) return setActiveIndex(STATEMENT_INDEX)
    if (activeIndex === works.length - 1) return setActiveIndex(0)
    setActiveIndex(activeIndex + 1)
  }

  const touchStartHandler = ({ touches }) => {
    touchStartX = touches[0].clientX
  }

  const touchMoveHandler = ({ touches }) => {
    if (!touchStartX) return
    const difference = touchStartX - touches[0].clientX
    if (difference < 0) previous()
    if (difference > 0) next()
    touchStartX = null
  }

  useEffect(() => {
    const keyUpHandler = ({ key }) => {
      switch (key) {
        case 'ArrowLeft':
          previous()
          break
        case 'ArrowRight':
          next()
          break
      }
    }

    window.addEventListener('keyup', keyUpHandler)
    return () => window.removeEventListener('keyup', keyUpHandler)
  })

  // Page state is not properly reset, using an event listener can mitigate this.
  // See: https://github.com/vercel/next.js/issues/9992
  useEffect(() => {
    const routeChangeHandler = () => setActiveIndex(null) // TODO: Fix issue with activeIndex when navigating
    Router.events.on('routeChangeComplete', routeChangeHandler)
    return () => Router.events.off('routeChangeComplete', routeChangeHandler)
  })

  return (
    <div
      className={styles.slideshow}
      onTouchStart={(e) => touchStartHandler(e)}
      onTouchMove={(e) => touchMoveHandler(e)}
    >
      {statement?.length ? (
        <div className={`${styles.slide} ${isActive(STATEMENT_INDEX) ? styles.show : ''}`}>
          <h2>{title}</h2>
          {statement.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a className={styles.continue} onClick={() => next()}>
            <span>Bekijk</span>
            <img alt="Bekijk" src="/assets/arrow-right.svg" />
          </a>
        </div>
      ) : (
        ''
      )}
      {works.map((work, index) => (
        <div key={work.filename} className={`${styles.slide} ${isActive(index) ? styles.show : ''}`}>
          {works.length > 1 ? (
            <div className={styles.navigation}>
              <div data-testid={`previous-${index}`} className={styles.previous} onClick={() => previous()}></div>
              <div data-testid={`next-${index}`} className={styles.next} onClick={() => next()}></div>
            </div>
          ) : (
            ''
          )}
          <Work src={`/img/${folder}/${work.filename}`} title={work.title} size={work.size} />
        </div>
      ))}
    </div>
  )
}

Slideshow.propTypes = {
  folder: PropTypes.string.isRequired,
  works: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  statement: PropTypes.arrayOf(PropTypes.string),
}

export default Slideshow
