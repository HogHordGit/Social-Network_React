import React from 'react';
import style from "../FriendsItem.module.css";

const FriendsItem = (props) => {
    return (
        <div className={`${style.friends__item} ${style.itemFrinds}`}>
            <div className={style.itemFrinds__image}>
                <img className={style.itemFrinds__img} src={props.img} alt="icon" />
            </div>
            <div className={style.itemFrinds__name}>
                <span className={style.itemFrinds__textSpan}>{props.name}</span> 
            </div>
        </div>
    );
}

export default FriendsItem;