import React from 'react';
import style from "../Navbar.module.css";

export const NavbarLinksSection = (props) => {

    return (
        <ul className={`${style.sidebar__body} ${style.menu}`}>

            { props.navbarLinksData }

        </ul>
    );
};

export default NavbarLinksSection;