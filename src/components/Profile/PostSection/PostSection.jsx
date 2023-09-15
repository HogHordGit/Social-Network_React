import "./PostSection.module.css";
import style from "./PostSection.module.css";
import React from "react";

const PostSection = (props) => {

    const postButtonEvent = () => {
        props.addPost();
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text);
    };

    const onKeyCheckEvent = (e) => {
        if (e.code === "Enter") postButtonEvent();
    };

    return (
        <div>
            <h2 className={style.userPosts__title}>My posts</h2>

            <div className={style.userPosts__textBody}>
                <label>Write post:</label>
                <textarea className={style.userPosts__textArea}
                          onChange={onPostChange}
                          onKeyDown={onKeyCheckEvent}
                          value={props.newPostText}
                          placeholder="your news..."></textarea>
            </div>

            <div className={style.userPosts__buttonBody}>
                <button className={style.userPosts__button} onClick={postButtonEvent}>Send</button>
            </div>

            <div className={`${style.content__comments} ${style.comments}`}>

                {props.postElements}

            </div>
        </div>
    )
};

export default PostSection;