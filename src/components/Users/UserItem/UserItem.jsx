import React from "react";

const UserItem = (props) => {
  return (
      <div className="users__item uItem">

          <div className="uItem__photo">
              <div className="uItem__image">
                  <img src="./img/smile.jpg" alt="face"/>
              </div>
              <div className="uItem__button">
                  <button>Follow</button>
              </div>
          </div>

          <div className="uItem__info">
              <div className="uItem__about">
                  <div className="uItem__aboutBody">
                      <div className="uItem__name">
                          <span>{props.fullName}</span>
                      </div>
                      <div className="uItem__message">
                          <span>{props.status}</span>
                      </div>
                  </div>
              </div>
              <div className="uItem__location">
                  <span>---</span>
              </div>
          </div>

      </div>
  )
};

export default UserItem;