import React from 'react'
import { graphql } from 'gatsby';
import BlogPost from '../components/SingleBlog/Index'
import Layout from '../components/Layout/Layout'


export const query = graphql`
query($slug:String){
    markdownRemark(fields: {
      slug:{
        eq: $slug
      }
    }){
      frontmatter{
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {

    // console.log(props.data)
    return (
        <Layout>
            <BlogPost data={props.data} />
        </Layout>
    )
}

export default Blog
