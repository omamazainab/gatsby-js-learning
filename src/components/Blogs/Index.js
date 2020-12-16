import React from 'react'
import { Link } from 'gatsby'
import { UseContentfulBlogPosts } from '../../hooks/UseContentfulBlogPosts'
import styles from './index.module.scss'

const Index = () => {
    const blogs = UseContentfulBlogPosts()
    console.log(blogs)
    return (
        <div>
            <h2>
                BLOG
            </h2>
            <ol className={styles.blogList}>
                {blogs.map(blog => (
                    <>
                        <li className={styles.blogListItem}>
                            <h2 className={styles.BlogTitle}><Link to={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
                            <small className={styles.BlogDate}>{blog.publishedDate}</small>
                            <p dangerouslySetInnerHTML={{ __html: blog.html }}></p>
                        </li>
                    </>
                ))}
            </ol>
        </div>
    )
}

export default Index
