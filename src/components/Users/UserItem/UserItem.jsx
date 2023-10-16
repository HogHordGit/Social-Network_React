import React from "react";

const UserItem = (props) => {

    const location = Object.values(props.usersData[props.id - 1].location);

    return (
        <div className="users__item uItem">

            <div className="uItem__photo">
                <div className="uItem__image">
                    <img src={props.usersData[props.id - 1].photoUrl} alt="face"/>
                </div>
                <div className="uItem__button">
                    {props.usersData[props.id - 1].followed ? <button onClick={() => {
                        props.unfollow(props.id)
                    }}>Follow</button> : <button onClick={() => {
                        props.follow(props.id)
                    }}>Unfollow</button>}
                </div>
            </div>

            <div className="uItem__info">
                <div className="uItem__about">
                    <div className="uItem__aboutBody">
                        <div className="uItem__name">
                            <span>{`${props.usersData[props.id - 1].fullName}.`}</span>
                        </div>
                        <div className="uItem__message">
                            <span>{props.usersData[props.id - 1].status}</span>
                        </div>
                    </div>
                </div>
                <div className="uItem__location">
                    <span>{location[0]}, {location[1]}</span>
                </div>
            </div>

        </div>
    )
};

export default UserItem;