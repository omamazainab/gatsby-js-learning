import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {

    const data = useStaticQuery(graphql`
    query siteMetaData {
        site {
          siteMetadata {
            title
            author
          }
        }
      }      
    `)
    return data.site.siteMetadata
}


