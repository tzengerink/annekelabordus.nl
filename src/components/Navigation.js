import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import WORKS from '../config'
import styles from './Navigation.module.css'

const INFO = [{ name: 'over', label: 'Over' }]

const Item = ({ href, isActive, onClick, children }) => {
    return (
        <li className={`${styles.item} ${isActive ? styles.active : ''}`} onClick={onClick}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

const Navigation = () => {
    const router = useRouter()
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
                    {WORKS.map(({ name, label }) => (
                        <Item
                            key={name}
                            href={`/${encodeURIComponent(name)}`}
                            isActive={router.asPath === `/${name}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Item>
                    ))}
                </ul>
                <h2>Info</h2>
                <ul>
                    {INFO.map(({ name, label }) => (
                        <Item
                            href={`/${name}`}
                            isActive={router.asPath === `/${name}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Item>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigation
