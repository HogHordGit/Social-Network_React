import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import UserItemContainer from "./UserItem/UserItemContainer";
import {setUsersAC} from "../../redux/reducers/users-reducer";

const mapStateToProps = (state) => {
    const usersElements = state.usersPage.usersData
        .map(user => <UserItemContainer id={user.id} key={user.id}/>)

    return {
        users: state.usersPage.usersData,
        usersElements
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setUsers: (users) => {
          dispatch(setUsersAC(users));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);