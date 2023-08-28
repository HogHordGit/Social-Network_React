import React from 'react';

import style from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSectionContainer from "./PostSection/PostSectionContainer";

const Profile = (props) => {

    return (
        <main className={style.main}>

            <div className={style.content__imgBody}>
                <div className={style.content__mainImage}></div>
            </div>

            <div className={`${style.content__aboutUser} ${style.aboutUser}`}>

                <ProfileInfo info={props.store.profilePage.userData}/>

            </div>

            <div className={`${style.content__userPosts} ${style.userPosts}`}>

                <PostSectionContainer store={props.store} dispatch={props.dispatch}/>

            </div>

        </main>
    );
};

export default Profile;