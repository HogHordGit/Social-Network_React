import React from 'react';

import style from "./Profile.module.css";

import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addProfileActionCreator, updateProfileActionCreator } from "../../redux/reducers/profile-reducer";

const Profile = (props) => {
    const postElements = props.profilePage.postsData
        .map( post => <Post message={post.text} numLike={post.likes} numDislike={post.dislikes} key={post.id}/> );
    const userProfileElements = props.profilePage.userData
        .map( el => <ProfileInfo name={el.name} city={el.city} dateBir={el.dateBir} educ={el.education} webSite={el.webSite} userImg={el.userImg} key={el.id}/> );
    const newProfileText = props.profilePage.newPostText;

    const postButtonEvent = () => {
        props.dispatch( addProfileActionCreator() );
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.dispatch( updateProfileActionCreator(text) );
    };

    return (
        <main>
          <div className={style.content__imgBody}>
            <div className={style.content__mainImage}></div>
          </div>
          
          <div className={`${style.content__aboutUser} ${style.aboutUser}`}>

              { userProfileElements }

          </div>

          <div className={`${style.content__userPosts} ${style.userPosts}`}>
              <h2 className={style.userPosts__title}>My posts</h2>

              <div className={style.userPosts__textBody}>
                <label>Write post:</label>
                <textarea className={style.userPosts__textArea}
                          onChange={ onPostChange }
                          value={ newProfileText }
                          placeholder="your news..."></textarea>
              </div>

              <div className={style.userPosts__buttonBody}>
                <button className={style.userPosts__button} onClick={ postButtonEvent }>Send</button>
              </div>
          </div>

          <div className={`${style.content__comments} ${style.comments}`}>
              
            { postElements }

          </div>

        </main>
    );
};

export default Profile;