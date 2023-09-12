import React from "react";
import style from "../Navbar.module.css";

const FriendsSection = (props) => {

    return (
        <div>
            <h3 className={style.friends__title}>Friends</h3>

            <div className={style.friends__holder}>
                { props.navFriends }
            </div>
        </div>
    )
};

export default FriendsSection;