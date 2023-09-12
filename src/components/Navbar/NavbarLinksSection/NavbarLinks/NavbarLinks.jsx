import React from 'react';
import style from "../NavbarLinks.module.css";
import {NavLink} from "react-router-dom";

const NavbarLinks = (props) => {

    return (
        <li className={style.menu__item}>
            <NavLink className={ navData => navData.isActive ? style.active : style.menu__item } to={props.link}>{props.title}</NavLink>
        </li>
    );
};

export default NavbarLinks;