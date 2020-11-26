import Link from 'next/link'
import { useState } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
            <h1>
                <Link href="/">Anneke Labordus</Link>
            </h1>
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.content}>
                <h2>Werk</h2>
                <ul>
                    <li>
                        <Link href="/landschap">Landschap</Link>
                    </li>
                    <li>
                        <Link href="/portret">Portret</Link>
                    </li>
                </ul>
                <h2>Info</h2>
                <ul>
                    <li>
                        <Link href="/over">Over</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
