import React from 'react'

function BlogContent(props){
    console.log(props)
    if(!props.isPublished){
        return null;
    }else{
        return(
            <div>
                {props.articleText}
                <p>{props.minutesToRead} minutes to read</p>
            </div>

        )
    }
    
}
export default BlogContent;