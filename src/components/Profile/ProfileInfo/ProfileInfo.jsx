import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    const state = props.info;

    return (
        <div className={style.user__body}>
            <div className={style.user__image}>
                <img alt="user" src={state.userImg}></img>
            </div>

            <div className={`${style.user__description} ${style.description}`}>
                <div className={`${style.description__item} ${style.desk_name}`}>{state.name}</div>
                <div className={style.description__item}>City: {state.city}</div>
                <div className={style.description__item}>Date of Birth: {state.dateBir}</div>
                <div className={style.description__item}>Education: {state.educ}</div>
                <div className={style.description__item}>Web Site: {state.webSite}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;