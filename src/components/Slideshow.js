import next from 'next'
import { useState, useEffect } from 'react'
import styles from './Slideshow.module.css'

const Slideshow = ({ type, images }) => {
    let touchStartX
    const [active, setActive] = useState(0)

    const previous = () => {
        if (active === 0) return setActive(images.length - 1)
        setActive(active - 1)
    }

    const next = () => {
        if (active === images.length - 1) return setActive(0)
        setActive(active + 1)
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
        <div className={styles.slideshow}>
            <div
                className={styles.slide}
                onTouchStart={(e) => touchStartHandler(e)}
                onTouchMove={(e) => touchMoveHandler(e)}
            >
                <div className={styles.navigation}>
                    <div className={styles.previous} onClick={() => previous()}></div>
                    <div className={styles.next} onClick={() => next()}></div>
                </div>
                <img src={`img/${type}/${images[active]}`} alt={images[active]} />
            </div>
        </div>
    )
}

export default Slideshow
