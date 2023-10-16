import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import UserItemContainer from "./UserItem/UserItemContainer";

const mapStateToProps = (state) => {
    const usersElements = state.usersPage.usersData
        .map(user => <UserItemContainer id={user.id} key={user.id}/>)

    return {
        usersElements
    };
};

export default connect(mapStateToProps)(Users);