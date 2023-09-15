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

    // make copy of state and return modified one.

    switch (action.type) {
        case ADD_DIALOG:
            if (state.newDialogText.trim() === "") return state;

            return  {
                ...state,
                newDialogText: "",
                messagesData: [...state.messagesData, {
                    id: state.messagesData.length + 1,
                    name: "Me",
                    message: state.newDialogText,
                    type: "sent"
                }]
            };

        case DIALOG_UPDATE:
            return {
                ...state,
                newDialogText: action.newText
            };

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