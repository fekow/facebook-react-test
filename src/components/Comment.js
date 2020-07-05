import React from 'react';
import avatar from '../assets/avatar.png';

function Comment({commentInfo}) {
  return (
    <div id="comments" className="row">
      <div id="avatar-comment" className="col-1">
        <img src={avatar} alt="comment"/>
      </div>
      <div id="comment-content"className="col-11">
        <p>
          <strong>{commentInfo.author.name}:</strong> 
          {commentInfo.content}
        </p>
      </div>
    </div>
  )
}
  export default Comment;
