import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Work from './Work'
import styles from './Slideshow.module.css'

const Slideshow = ({ folder, works }) => {
    let touchStartX
    const [activeIndex, setActiveIndex] = useState(0)

    const previous = () => {
        if (activeIndex === 0) return setActiveIndex(works.length - 1)
        setActiveIndex(activeIndex - 1)
    }

    const next = () => {
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
        const routeChangeHandler = () => setActiveIndex(0)
        Router.events.on('routeChangeComplete', routeChangeHandler)
        return () => Router.events.off('routeChangeComplete', routeChangeHandler)
    })

    return (
        <div
            className={styles.slideshow}
            onTouchStart={(e) => touchStartHandler(e)}
            onTouchMove={(e) => touchMoveHandler(e)}
        >
            {works.map((work, index) => (
                <div key={work.filename} className={`${styles.slide} ${index === activeIndex ? styles.show : ''}`}>
                    <div className={styles.navigation}>
                        <div className={styles.previous} onClick={() => previous()}></div>
                        <div className={styles.next} onClick={() => next()}></div>
                    </div>
                    <Work src={`/img/${folder}/${work.filename}`} title={work.title} size={work.size} />
                </div>
            ))}
        </div>
    )
}

Slideshow.propTypes = {
    folder: PropTypes.string.isRequired,
    works: PropTypes.arrayOf(PropTypes.object),
}

export default Slideshow
