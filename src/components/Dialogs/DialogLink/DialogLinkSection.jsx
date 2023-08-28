import React from 'react';
import style from "./DialogLink.module.css";
import DialogLink from "./DialogLink";

const DialogLinkSection = (props) => {

    const dialogsElements = props.dialogData
        .map(dialog => <DialogLink name={dialog.name} id={dialog.id} key={dialog.id}/>);

    return (
        <div>
            <ul className={style.list}>

                {dialogsElements}

            </ul>
        </div>
    );
};

export default DialogLinkSection;