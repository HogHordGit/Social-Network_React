import DialogSection from "./DialogSection";
import {addDialogActionCreator, updateDialogActionCreator} from "../../../redux/reducers/dialog-reducer";
import {connect} from "react-redux";
import Messages from "../Messages/Messages";
import React from "react";

const mapStateToProps = (state) => {

    const messagesElements = state.dialogsPage.messagesData
        .map(message => <Messages name={message.name} message={message.message} type={message.type} key={message.id}/>);

    return {
        newMessageText: state.dialogsPage.newDialogText,
        messagesElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {
            dispatch(addDialogActionCreator());
        },
        updateNewDialogText: (text) => {
            dispatch(updateDialogActionCreator(text));
        }
    };
};

const DialogSectionContainer = connect(mapStateToProps, mapDispatchToProps)(DialogSection);

export default DialogSectionContainer;