import "./PostSection.module.css";
import React from "react";
import PostSection from "./PostSection";
import {
    addProfileActionCreator,
    updateProfileActionCreator
} from "../../../redux/reducers/profile-reducer";
import StoreContext from "../../../StoreContext";

const PostSectionContainer = (props) => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const postButtonEvent = () => {
                        store.dispatch(addProfileActionCreator());
                    };

                    const onPostChange = (text) => {
                        store.dispatch(updateProfileActionCreator(text));
                    };

                    return <PostSection updateNewPostText={onPostChange}
                                 addPost={postButtonEvent}
                                 postsData={state.profilePage.postsData}
                                 newPostText={state.profilePage.newPostText}
                                 focusValue={state.profilePage.checkFocus}
                    />
                }
            }
        </StoreContext.Consumer>

    )
};

export default PostSectionContainer;