import React from 'react';

import style from "./DialogSection.module.css";
import Messages from "../Messages/Messages";

const DialogSection = (props) => {

    const messagesElements = props.messagesData
        .map(message => <Messages name={message.name} message={message.message} type={message.type} key={message.id}/>);

    const dialogButtonEvent = () => {
        props.addDialog();
    };

    const onDialogChange = (e) => {
        const text = e.target.value;
        props.updateNewDialogText(text);
    };

    return (
        <div>

            {messagesElements}

            <div className={`${style.rightSide__textarea} ${style.textarea}`}>
                <div className={style.textarea__input}>
                    <label>Write message:</label>
                    <textarea className={style.textarea__text}
                              onChange={onDialogChange}
                              value={props.newMessageText}
                              placeholder="your message..."></textarea>
                </div>

                <div className={style.textarea__buttonBody}>
                    <button onClick={dialogButtonEvent} className={style.textarea__btn}>Send</button>
                </div>
            </div>

        </div>
    )
};

export default DialogSection;