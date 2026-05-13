import React from 'react'

function Article(props){
    const {title,date="January 1, 1970",minutes,preview}=props
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small> <br />
            <em>Minutes to read:{minutes}</em>
            <p>{preview}</p>
        </article>
    )
}
export default Article;