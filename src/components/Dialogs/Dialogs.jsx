import React from 'react';

import style from "./Dialogs.module.css";

import DialogLinkSection from "./DialogLink/DialogLinkSection";
import DialogSectionContainer from "./DialogSection/DialogSectionContainer";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    return (
        <section>

            <h2 className={style.title}>Dialogs</h2>

            <div className={style.holder}>

                <div className={style.left_side}>

                    <DialogLinkSection dialogData={props.dialogsPage.dialogData}/>

                </div>

                <div className={style.right_side}>

                    <DialogSectionContainer messagesData={state.messagesData} newMessageText={props.dialogsPage.newDialogText} dispatch={props.dispatch}/>

                </div>
            </div>

        </section>
    );
}

export default Dialogs;