import React from 'react';

import style from "./DialogSection.module.css";

const DialogSection = (props) => {

    const dialogButtonEvent = () => {
        props.addDialog();
    };

    const onDialogChange = (e) => {
        const text = e.target.value;
        props.updateNewDialogText(text);
    };

    const onKeyCheckEvent = (e) => {
        if (e.code === "Enter") props.addDialog();
    };

    return (
        <div>

            {props.messagesElements}

            <div className={`${style.rightSide__textarea} ${style.textarea}`}>
                <div className={style.textarea__input}>
                    <label>Write message:</label>
                    <textarea className={style.textarea__text}
                              onChange={onDialogChange}
                              onKeyDown={onKeyCheckEvent}
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