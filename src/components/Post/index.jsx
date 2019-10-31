import React, {useState} from 'react'

export default function Post(props) {
    const [isEdit,setEdit] = useState(false)

    setEdit(true)


    return (
        <div className="post">
            <div className='post-header'>
                <h2 className='post-title'>{props.title}</h2>
                <button className="post-pen"></button>
            </div>
            <p className="post-content">{props.content}</p>
            <div className="post-footer">
                <button className="post-like">{props.likes}
                </button><button className="post-remove"></button>
            </div>
        </div>
    )
}