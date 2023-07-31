import React from 'react';
import style from "./Navbar.module.css";
import NavbarLinks from './NavbarLinks/NavbarLinks';
import FriendsItem from './FriendsItem/FriendsItem';

const Navbar = (props) => {

    const navbarLinksData = props.navbarData.navLinks.map(item => <NavbarLinks link={item.link} title={item.title} key={item.id}/>);
    const navFriends = props.navbarData.navFriends.map(item => <FriendsItem img={item.img} name={item.name} key={item.id}/>);

    return (
        <aside className={style.sidebar}>
            <nav className={style.sidebar__body}>
                <ul className={`${style.sidebar__body} ${style.menu}`}>
                    
                    { navbarLinksData }

                </ul>
            </nav>
            
            <div className={`${style.sidebar__frinds} ${style.friends}`}>
                <h3 className={style.friends__title}>Friends</h3>

                <div className={style.friends__holder}>
                    { navFriends }
                </div>
            </div>
        </aside>
    );
};

export default Navbar;