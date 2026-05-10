import React from 'react'
import BlogContent from './BlogContent'
import Comment from './Comment';

function BlogPost(){
    return(
        <div>
            <BlogContent 
                articleText="This is the article text" 
                isPublished={true}
                minutesToRead={1}
            />
            <Comment commentText="This is the first comment." />
            <Comment commentText="This is the second comment." />
            <Comment commentText="This is the third comment." />
        </div>
    )
}
export default BlogPost;