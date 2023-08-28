import "./PostSection.module.css";
import style from "./PostSection.module.css";
import React from "react";
import PostExample from "../PostExample/PostExample";

const PostSection = (props) => {

    const postElements = props.postsData
        .map(post => <PostExample message={post.text} numLike={post.likes} numDislike={post.dislikes} key={post.id}/>);

    const postButtonEvent = () => {
        props.addPost();
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text);
    };

    const newProfileText = props.newPostText;

    return (
        <div>
            <h2 className={style.userPosts__title}>My posts</h2>

            <div className={style.userPosts__textBody}>
                <label>Write post:</label>
                <textarea className={style.userPosts__textArea}
                          onChange={onPostChange}
                          value={newProfileText}
                          placeholder="your news..."></textarea>
            </div>

            <div className={style.userPosts__buttonBody}>
                <button className={style.userPosts__button} onClick={postButtonEvent}>Send</button>
            </div>

            <div className={`${style.content__comments} ${style.comments}`}>

                {postElements}

            </div>
        </div>
    )
};

export default PostSection;