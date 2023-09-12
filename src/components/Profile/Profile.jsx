import React from 'react';

import style from "./Profile.module.css";

import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostSectionContainer from "./PostSection/PostSectionContainer";

const Profile = (props) => {

    return (
        <main className={style.main}>

            <div className={style.content__imgBody}>
                <div className={style.content__mainImage}></div>
            </div>

            <div className={`${style.content__aboutUser} ${style.aboutUser}`}>

                <ProfileInfoContainer />

            </div>

            <div className={`${style.content__userPosts} ${style.userPosts}`}>

                <PostSectionContainer />

            </div>

        </main>
    );
};

export default Profile;