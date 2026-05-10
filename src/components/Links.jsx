import React from 'react'

function Links(props){
    return(
        <div>
            <h3>Links</h3>
            <a href={props.github}>My github Link</a>
            <br />
            <a href={props.linkedIn}>My LinkedIn Link</a>
        </div>
    )
}
export default Links;