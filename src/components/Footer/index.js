import React from 'react';
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import styles from './index.module.scss'

const Index = () => {

    const data = useSiteMetaData();

    return (
        <div className={styles.footer}>
            ©2020 {data.author}
        </div>
    )
}

export default Index
