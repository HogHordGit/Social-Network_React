// eslint-disable-next-line
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setUsers: (users) => {
          dispatch(setUsersAC(users));
      },
      follow: (userID) => {
          dispatch(followAC(userID));
      },
      unfollow: (userID) => {
          dispatch(unfollowAC(userID));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);