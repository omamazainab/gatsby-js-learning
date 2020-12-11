import React from 'react'
import { useBlogPosts } from '../../hooks/useBlogPosts'

const Index = () => {
    const blogs = useBlogPosts()
    console.log(blogs)
    return (
        <div>
            {blogs.map(blog => (<p>{blog.excerpt}</p>))}
        </div>
    )
}

export default Index
