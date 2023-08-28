const ADD_DIALOG = "ADD-DIALOG";
const DIALOG_UPDATE = "DIALOG-UPDATE";

const initialState = {
    dialogData: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Dmitry" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Valera" },
        { id: 6, name: "Viktor" }
    ],
    messagesData: [
        { id: 1,
            name: "Dmitry",
            message: "I am a normal popover and I can have text and everything",
            type: "received" },
        { id: 2,
            name: "Me",
            message: "I am a normal popover and I can have text and everything",
            type: "sent" },
        { id: 3,
            name: "Dmitry",
            message: "I am a normal popover and I can have text and everything",
            type: "received" },
        { id: 4,
            name: "Me",
            message: "I am a normal popover and I can have text and everything",
            type: "sent" }
    ],
    newDialogText: ""
};

const dialogReducer = (state = initialState, action) => {
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