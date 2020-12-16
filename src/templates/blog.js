import React from 'react'
import { graphql } from 'gatsby';
import BlogPost from '../components/SingleBlog/Index'
import Layout from '../components/Layout/Layout'


export const query = graphql`
query($slug:String){
    contentfulBlogPost(slug:{eq:$slug}){
      title
      publishedDate(fromNow:true)
    }
  }
`

const Blog = (props) => {

    // console.log(props.data)
    return (
        <Layout>
            <BlogPost data={props.data.contentfulBlogPost} />
        </Layout>
    )
}

export default Blog
