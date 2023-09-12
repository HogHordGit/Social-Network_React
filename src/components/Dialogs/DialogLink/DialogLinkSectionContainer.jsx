import {connect} from "react-redux";
import DialogLinkSection from "./DialogLinkSection";
import DialogLink from "./DialogLink/DialogLink";
import React from "react";

const mapStateToProps = (state) => {

    const dialogsElements = state.dialogsPage.dialogData
        .map(dialog => <DialogLink name={dialog.name} id={dialog.id} key={dialog.id}/>);

    return {
        dialogsElements
    };
};

const DialogLinkSectionContainer = connect(mapStateToProps)(DialogLinkSection);

export default DialogLinkSectionContainer;