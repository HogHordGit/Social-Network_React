import React from 'react';
import DialogSection from "./DialogSection";
import {addDialogActionCreator, updateDialogActionCreator} from "../../../redux/reducers/dialog-reducer";

const DialogSectionContainer = (props) => {

    const dialogButtonEvent = () => {
        props.dispatch(addDialogActionCreator());
    };

    const onDialogChange = (text) => {
        props.dispatch(updateDialogActionCreator(text));
    };

    return (
        <DialogSection addDialog={dialogButtonEvent}
                       updateNewDialogText={onDialogChange}
                       newMessageText={props.store.dialogsPage.newDialogText}
                       messagesData={props.store.dialogsPage.messagesData}
        />
    )
};

export default DialogSectionContainer;