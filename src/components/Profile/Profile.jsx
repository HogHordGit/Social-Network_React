import React from 'react';

import style from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSectionContainer from "./PostSection/PostSectionContainer";
import StoreContext from "../../StoreContext";

const Profile = (props) => {

    return (
        <main className={style.main}>

            <div className={style.content__imgBody}>
                <div className={style.content__mainImage}></div>
            </div>

            <div className={`${style.content__aboutUser} ${style.aboutUser}`}>

                <StoreContext.Consumer>
                    {
                        (store) => {
                            const state = store.getState();

                            return <ProfileInfo info={state.profilePage.userData}/>
                        }
                    }
                </StoreContext.Consumer>

            </div>

            <div className={`${style.content__userPosts} ${style.userPosts}`}>

                <PostSectionContainer />

            </div>

        </main>
    );
};

export default Profile;