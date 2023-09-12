import React from 'react';
import style from "./DialogLink.module.css";

const DialogLinkSection = (props) => {

    return (
        <div>
            <ul className={style.list}>

                {props.dialogsElements}

            </ul>
        </div>
    );
};

export default DialogLinkSection;