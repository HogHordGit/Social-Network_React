import React from "react";
import {connect} from "react-redux";
import UserItem from "./UserItem";

const mapStateToProps = (state) => {
    return {
        userInfo: state.usersPage.usersData
    };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);