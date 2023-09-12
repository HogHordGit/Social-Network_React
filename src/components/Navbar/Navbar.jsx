import React from 'react';
import style from "./Navbar.module.css";
import NavbarLinksSectionContainer from "./NavbarLinksSection/NavbarLinksSectionContainer";
import {FriendsSectionContainer} from "./FriendsSection/FriendsSectionContainer";

const Navbar = (props) => {

    return (
        <aside className={style.sidebar}>
            <nav className={style.sidebar__body}>

                <NavbarLinksSectionContainer />

            </nav>
            
            <div className={`${style.sidebar__frinds} ${style.friends}`}>

                <FriendsSectionContainer />

            </div>
        </aside>
    );
};

export default Navbar;