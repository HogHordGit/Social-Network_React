import React from "react";
import {connect} from "react-redux";
import UsersList from "./UsersList";
import UserItem from "../UserItem/UserItem";

const mapStateToProps = (state) => {
    const usersElements = state.usersPage.usersData
        .map(user => <UserItem fullName={user.fullName} status={user.status}/>)

    return {
        usersElements
    };
};

// const mapDispatchToProps = (dispatch) => {
//
// };

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer;