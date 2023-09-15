const ADD_POST = "ADD-POST";
const PROFILE_UPDATE = "PROFILE-UPDATE";

const initialState = {
    postsData: [
        {id: 1, text: "Hi, it's my first post!", likes: 2, dislikes: 0},
        {id: 2, text: "Hey, what's up?", likes: 5, dislikes: 1},
        {id: 3, text: "Why I'm still alone?", likes: 10, dislikes: 0}
    ],
        userData: {
            id: 1,
            name: "Dmitry K.",
            city: "Minsk",
            datBir: "2 january",
            education: "BSU'11",
            webSite: "https://it-kamasutra.com",
            userImg: "./img/user-photo.png"
        },
        newPostText: "",
        checkFocus: null
};

const profileReducer = (state = initialState, action) => {

    // make copy of state and return modified one.

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim() === "") return state;

            return  {
                ...state,
                postsData: [...state.postsData, {
                    id: state.postsData.length + 1,
                    text: state.newPostText,
                    likes: 0,
                    dislikes: 0
                }],
                newPostText: ""
            };

        case PROFILE_UPDATE:
            return  {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
};

export const addProfileActionCreator = () => ({ type: ADD_POST });

export const updateProfileActionCreator = (text) => ({
    type: PROFILE_UPDATE,
    newText: text
});

export default profileReducer;