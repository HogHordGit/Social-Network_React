import React from "react";

const UsersList = (props) => {
    console.log(props.usersElements);

    return(
        <div>
            {props.usersElements}
        </div>
    );
};

export default UsersList;