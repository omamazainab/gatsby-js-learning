import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'

const index = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.nav}>
                    <Link to="/" className={styles.link} activeStyle={{color:'black'}}>Home</Link>
                </div>
                <div className={styles.nav}>
                    <Link to="/blogs" className={styles.link} activeStyle={{color:'black'}}>Blogs</Link>
                </div>
            </nav>
        </header>
    )
}

export default index
