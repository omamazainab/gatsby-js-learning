import React from 'react'
import './index.scss';


const Index = (props) => {
    // console.log(data)
    return (
        <div>
            <h1>{props.data.title}</h1><small>
                {props.data.publishedDate}
            </small>
            {/* <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div> */}
        </div>
    )
}

export default Index
