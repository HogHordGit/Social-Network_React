import React from "react";
import "./User.css";
import UsersListContainer from "./UsersList/UsersListContainer";

const Users = (props) => {
    return (
        <div className="users_holder users">
            <div className="users__title">
                <h2>Users</h2>
            </div>

            <div className="users__body">

                <UsersListContainer />

            </div>

            <div className="users__button">
                <button>Show more</button>
            </div>
        </div>
    )
};

export default Users;