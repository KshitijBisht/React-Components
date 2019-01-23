import React from 'react';

 const CommentsDetails = (props) => {
    return (
        <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.src} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                 </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    </div>
    )
}

export default CommentsDetails;