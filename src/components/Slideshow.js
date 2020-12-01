import next from 'next'
import { useState, useEffect } from 'react'
import styles from './Slideshow.module.css'

const Slideshow = ({ type, works }) => {
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
        console.log('move')
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
                    <img src={`img/${type}/${work.filename}`} alt={work.title} />
                    <h3>{work.title}</h3>
                    <span>{`${work.size.height}x${work.size.width} cm`}</span>
                </div>
            ))}
        </div>
    )
}

export default Slideshow
