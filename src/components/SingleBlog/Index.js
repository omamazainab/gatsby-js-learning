import React from 'react'
import './index.scss';


const Index = (props) => {
    // console.log(data)
    return (
        <div>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
        </div>
    )
}

export default Index
