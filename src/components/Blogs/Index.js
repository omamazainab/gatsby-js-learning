import React from 'react'
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
                            <h2>{blog.frontmatter.title}</h2>
                            <small>{blog.frontmatter.date}</small>
                            <p dangerouslySetInnerHTML={{__html:blog.html}}></p>
                        </li>
                    </>
                ))}
            </ol>
        </div>
    )
}

export default Index
