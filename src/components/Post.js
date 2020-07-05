import React from 'react';
import Comment from './Comment'
import avatar from '../assets/avatar.png';

function Post ({ postInfo }) {

  return (
    <div id="post">
      <div id="author" className="row">
        <div className="col-1">
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="col-11">
          <p className="name"><strong>{postInfo.author.name}</strong></p>
          <small>{postInfo.date}</small>
        </div>
      </div>
      <div id="content">
        <p>{postInfo.content}</p>
      </div>
      <hr />
      {postInfo.comments.map(comment=> <Comment  key={comment.id} commentInfo={comment}/>)}
    </div>
  )
}

export default Post;
