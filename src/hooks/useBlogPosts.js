import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useBlogPosts = () => {

    const data = useStaticQuery(graphql`
    query Posts {
        allMarkdownRemark{
          
            nodes{
              frontmatter{
                title
                date
              }
              html
              excerpt
            }
          }
        }
         
    `)
    return data.allMarkdownRemark.nodes
}


