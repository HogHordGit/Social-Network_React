import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.user__body}>
            <div className={style.user__image}>
                <img alt="user" src={props.userImg}></img>
            </div>

            <div className={`${style.user__description} ${style.description}`}>
                <div className={`${style.description__item} ${style.desk_name}`}>{props.name}</div>
                <div className={style.description__item}>City: {props.city}</div>
                <div className={style.description__item}>Date of Birth: {props.dateBir}</div>
                <div className={style.description__item}>Education: {props.educ}</div>
                <div className={style.description__item}>Web Site: {props.webSite}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;