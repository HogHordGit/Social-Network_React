import React from 'react';
import DialogSection from "./DialogSection";
import {addDialogActionCreator, updateDialogActionCreator} from "../../../redux/reducers/dialog-reducer";
import StoreContext from "../../../StoreContext";

const DialogSectionContainer = (props) => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const dialogButtonEvent = () => {
                        store.dispatch(addDialogActionCreator());
                    };

                    const onDialogChange = (text) => {
                        store.dispatch(updateDialogActionCreator(text));
                    };

                    return <DialogSection addDialog={dialogButtonEvent}
                                   updateNewDialogText={onDialogChange}
                                   newMessageText={state.dialogsPage.newDialogText}
                                   messagesData={state.dialogsPage.messagesData}
                    />
                }
            }
        </StoreContext.Consumer>


    )
};

export default DialogSectionContainer;