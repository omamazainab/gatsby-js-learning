import React from 'react'
import { Link } from 'gatsby'
import { useBlogPosts } from '../../hooks/useBlogPosts'

const Index = () => {
    const blogs = useBlogPosts()
    console.log(blogs)
    return (
        <div>
            <ol>
                {blogs.map(blog => (
                    <>
                        <li>
                            <h2><Link to={`/blogs/${blog.fields.slug}`}>{blog.frontmatter.title}</Link></h2>
                            <small>{blog.frontmatter.date}</small>
                            <p dangerouslySetInnerHTML={{ __html: blog.html }}></p>
                        </li>
                    </>
                ))}
            </ol>
        </div>
    )
}

export default Index
