import React from "react";

const UserItem = (props) => {

    return (
        <div className="users__item uItem">

            <div className="uItem__photo">
                <div className="uItem__image">
                    <img src={props.user.photoUrl} alt="face"/>
                </div>
                <div className="uItem__button">
                    {props.user.followed ? <button onClick={() => {
                        props.unfollow(props.user.id)
                    }}>Follow</button> : <button onClick={() => {
                        props.follow(props.user.id)
                    }}>Unfollow</button>}
                </div>
            </div>

            <div className="uItem__info">
                <div className="uItem__about">
                    <div className="uItem__aboutBody">
                        <div className="uItem__name">
                            <span>{props.user.fullName}.</span>
                        </div>
                        <div className="uItem__message">
                            <span>{props.user.status}</span>
                        </div>
                    </div>
                </div>
                <div className="uItem__location">
                    <span>{props.user.location.city}, {props.user.location.country}</span>
                </div>
            </div>

        </div>
    )
};

export default UserItem;