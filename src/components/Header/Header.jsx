import React from 'react';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={ style.header }>
          <div className={ style.icon }>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaRpJuvy7ikQHsGI7FuEAIEAwp-6L7kaIhD-4q7ftyPmnCpWHW3313EloJNz_9Rt5ekY&usqp=CAU" className="icon__image" alt="logo"></img>
          </div>
        </header>
    );
};

export default Header;