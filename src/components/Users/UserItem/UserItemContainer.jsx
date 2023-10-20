// eslint-disable-next-line
import React from "react";
import {connect} from "react-redux";
import UserItem from "./UserItem";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);