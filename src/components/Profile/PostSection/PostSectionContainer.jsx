import "./PostSection.module.css";
import React from "react";
import PostSection from "./PostSection";
import {addProfileActionCreator, updateProfileActionCreator} from "../../../redux/reducers/profile-reducer";

const PostSectionContainer = (props) => {
    const state = props.store;

    const postButtonEvent = () => {
        props.dispatch(addProfileActionCreator());
    };

    const onPostChange = (text) => {
        props.dispatch(updateProfileActionCreator(text));
    };

    return (
        <PostSection updateNewPostText={onPostChange}
                     addPost={postButtonEvent}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}
        />
    )
};

export default PostSectionContainer;