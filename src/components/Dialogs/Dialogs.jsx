import React from 'react';

import style from "./Dialogs.module.css";

import Messages from './Messages/Messages';
import DialogLink from './DialogLink/DialogLink';
import { addDialogActionCreator, updateDialogActionCreator } from "../../redux/reducers/dialog-reducer";
export

const Dialogs = (props) => {
    const messagesElements = props.dialogsPage.messagesData
        .map( message => <Messages name={message.name} message={message.message} type={message.type} key={message.id}/> );
    const dialogsElements = props.dialogsPage.dialogData
        .map( dialog => <DialogLink name={dialog.name} id={dialog.id} key={dialog.id}/> );
    const newMessageText = props.dialogsPage.newDialogText;

    const dialogButtonEvent = () => {
        props.dispatch( addDialogActionCreator() );
    };

    const onDialogChange = (e) => {
        const text = e.target.value;
        props.dispatch( updateDialogActionCreator(text) );
    };

    return (
        <section>

            <h2 className={style.title}>Dialogs</h2>

            <div className={style.holder}>
                <div className={style.left_side}>
                    <ul className={style.list}>

                        { dialogsElements }

                    </ul>
                </div>
                <div className={style.right_side}>
                   
                    { messagesElements }

                    <div className={`${style.rightSide__textarea} ${style.textarea}`}>
                        <div className={style.textarea__input}>
                            <label>Write message:</label>
                            <textarea className={style.textarea__text}
                                      onChange={ onDialogChange }
                                      value={ newMessageText }
                                      placeholder="your message..."></textarea>
                        </div>

                        <div className={style.textarea__buttonBody}>
                            <button onClick={ dialogButtonEvent } className={style.textarea__btn}>Send</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Dialogs;