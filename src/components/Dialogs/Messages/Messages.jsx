import React from 'react';
import style from "./Messages.module.css";

const checkMessage = (type, el) => {
    if (type === "sent") {
        if (el === "body") return style.item_sent;
        if (el === "triangle") return style.triangle_sent;
    }
};

const Messages = (props) => {
    return (
        <div className={`${style.item} ${checkMessage(props.type, "body")}`}>
            <div className={style.photo_holder}>
                <img src="./img/smile.jpg" alt="profile"/>
                <div className={style.name}>{props.name}</div>
            </div>
            <div className={style.message}>
                {props.message}
                <span className={`${style.triangle} ${checkMessage(props.type, "triangle")}`}></span>
            </div>
        </div>
    );
}

export default Messages;