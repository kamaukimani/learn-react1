import React from 'react'
import Article from './Article';

function ArticleList({posts}){
    const articlePost=posts.map((post)=>(
        <Article 
            key={post.id}
            title={post.title} 
            date={post.date} minutes={post.minutes}
            preview={post.preview}
        />
    ))
    return(
        <main>
            {articlePost}
        </main>
    )
}
export default ArticleList;