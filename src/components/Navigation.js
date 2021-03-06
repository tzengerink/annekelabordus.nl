import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { WORKS, PROJECTS } from '../config'
import styles from './Navigation.module.css'

const INFO = [{ name: 'over', label: 'Over' }]

const Item = ({ href, isActive, onClick, children }) => {
    return (
        <li className={`${styles.item} ${isActive ? styles.active : ''}`} onClick={onClick}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

Item.propTypes = {
    href: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
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
                <h2>Project</h2>
                <ul>
                    {PROJECTS.map(({ name, label }) => (
                        <Item
                            key={name}
                            href={`/project/${encodeURIComponent(name)}`}
                            isActive={router.asPath === `/project/${name}`}
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
                            key={name}
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
