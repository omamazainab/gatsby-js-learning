import React from 'react'
import { Link } from 'gatsby'
import { useBlogPosts } from '../../hooks/useBlogPosts'
import styles from './index.module.scss'

const Index = () => {
    const blogs = useBlogPosts()
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
                            <h2 className={styles.BlogTitle}><Link to={`/blogs/${blog.fields.slug}`}>{blog.frontmatter.title}</Link></h2>
                            <small className={styles.BlogDate}>{blog.frontmatter.date}</small>
                            {/* <p dangerouslySetInnerHTML={{ __html: blog.html }}></p> */}
                        </li>
                    </>
                ))}
            </ol>
        </div>
    )
}

export default Index
