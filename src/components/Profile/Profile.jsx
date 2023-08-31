import React from 'react';

import style from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSectionContainer from "./PostSection/PostSectionContainer";

const Profile = (props) => {

    const state = props.store.getState();

    return (
        <main className={style.main}>

            <div className={style.content__imgBody}>
                <div className={style.content__mainImage}></div>
            </div>

            <div className={`${style.content__aboutUser} ${style.aboutUser}`}>

                <ProfileInfo info={state.profilePage.userData}/>

            </div>

            <div className={`${style.content__userPosts} ${style.userPosts}`}>

                <PostSectionContainer store={state} dispatch={props.store.dispatch}/>

            </div>

        </main>
    );
};

export default Profile;