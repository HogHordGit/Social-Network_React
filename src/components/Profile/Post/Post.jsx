import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
  return (

    <div className={style.comments__body}>
      <div className={style.comments__image}>
        <img alt="post" src="./img/comment-photo.png"></img>
      </div>

      <div className={style.comment__holder}>
          <div className={style.comments__text}>{props.message}</div>

          <div className={style.comments__likes}>
              <div className={style.comments__img_holder}>
                  <img height="15px" width="15px" src="./img/like.png" alt="like"/> {props.numLike}
              </div>

              <div className={style.comments__img_holder}>
                  <img height="15px" width="15px" src="./img/dislike.png" alt="like"/> {props.numDislike}
              </div>

          </div>
      </div>

    </div>

  );
};

export default Post;