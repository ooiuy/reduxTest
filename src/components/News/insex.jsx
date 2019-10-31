import React from 'react'
import Post from '../Post'

export default function News(props){
    return(
        <div className="news">
            {
                props.news.map(post =>
                    <Post
                    key={id}
                    title={post.title}
                    content={post.content}
                    likes={post.likes}
                    handleLike={props.handleLike()}/>
                    )
            }
        </div>
    )
}