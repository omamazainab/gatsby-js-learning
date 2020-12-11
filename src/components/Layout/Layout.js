import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout_container}>
            <div className={styles.layout_content}>
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
