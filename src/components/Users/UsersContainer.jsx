import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";
import UserItem from "./UserItem/UserItem";

const mapStateToProps = (state) => {
    const usersElements = state.usersPage.usersData
        .map(user => <UserItem photoUrl={user.photoUrl} fullName={user.fullName} status={user.status}
                               location={Object.values(user.location)} followed={user.followed} key={user.id} id={user.id}/>)

    return {
        users: state.usersPage.usersData,
        usersElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);