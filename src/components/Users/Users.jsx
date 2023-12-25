import React from "react";
import "./User.css";
import axios from "axios";
import UserItem from "./UserItem/UserItem";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=4").then(res => {
            this.props.setUsers(res.data.items);
        });
    }

    userElements = () => {
        return this.props.users
            .map(user => <UserItem user={user} key={user.id} follow={this.props.follow} unfollow={this.props.unfollow}/>)
    }

    render() {
        return (
            <div className="users_holder users">
                <div className="users__title">
                    <h2>Users</h2>
                </div>

                <div className="users__body">

                    {this.userElements()}

                </div>

                <div className="users__button">
                    <button>Show more</button>
                </div>
            </div>
        )
    }
}

export default Users;