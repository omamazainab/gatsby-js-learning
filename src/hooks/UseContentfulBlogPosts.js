import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const UseContentfulBlogPosts = () => {

    const data = useStaticQuery(graphql`
        query ContentfulBlogPosts {
            allContentfulBlogPost(sort:{
                    fields:publishedDate
                    order:DESC
                }){
                   
                        nodes{
                            title
                            slug
                            publishedDate(fromNow:true)
                            description{
                                json
                            }
                        }
                   
            }
        }      
    `)
    return data.allContentfulBlogPost.nodes
}

