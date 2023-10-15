import React from "react";
import "./User.css";

const Users = (props) => {
    return (
        <div className="users_holder users">
            <div className="users__title">
                <h2>Users</h2>
            </div>

            <div className="users__body">

                {props.usersElements}

            </div>

            <div className="users__button">
                <button>Show more</button>
            </div>
        </div>
    )
};

export default Users;