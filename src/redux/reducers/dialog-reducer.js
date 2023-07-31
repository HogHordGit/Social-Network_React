const ADD_DIALOG = "ADD-DIALOG";
const DIALOG_UPDATE = "DIALOG-UPDATE";

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            if (state.newDialogText.trim() === "") return state;

            const arrLength = state.messagesData.length;

            const newDialog = {
                id: arrLength + 1,
                name: "Me",
                message: state.newDialogText,
                type: "sent"
            };

            state.messagesData[`${arrLength + 1}`] = (newDialog);
            state.newDialogText = "";
            return state;
        case DIALOG_UPDATE:
            state.newDialogText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });

export const updateDialogActionCreator = (text) => ({
    type: DIALOG_UPDATE,
    newText: text
});

export default dialogReducer;