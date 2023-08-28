import React from 'react';
import style from "./DialogLink.module.css";
import {NavLink} from "react-router-dom";

const DialogLink = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <li className={style.list_item}>
            <NavLink className={navData => navData.isActive ? style.active : style.list_name}
                     to={path}>{props.name}</NavLink>
        </li>
    );
}

export default DialogLink;

