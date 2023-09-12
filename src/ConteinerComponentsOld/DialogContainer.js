import StoreContext from "../StoreContext";
import {addDialogActionCreator, updateDialogActionCreator} from "../redux/reducers/dialog-reducer";
import DialogSection from "../components/Dialogs/DialogSection/DialogSection";

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