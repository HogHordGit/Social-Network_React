const ADD_POST = "ADD-POST";
const PROFILE_UPDATE = "PROFILE-UPDATE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim() === "") return state;

            const arrLength = state.postsData.length;

            const newPost = {
                id: arrLength + 1,
                text: state.newPostText,
                likes: 0,
                dislikes: 0
            };
            state.postsData[`${arrLength + 1}`] = (newPost);
            state.newPostText = "";
            return state;
        case PROFILE_UPDATE:
            state.newPostText = action.newText;
            return state;
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