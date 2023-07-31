import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import navbarReducer from "./reducers/navbar-reducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Hi, it's my first post!", likes: 2, dislikes: 0},
                {id: 2, text: "Hey, what's up?", likes: 5, dislikes: 1},
                {id: 3, text: "Why I'm still alone?", likes: 10, dislikes: 0}
            ],
            userData: [
                {
                    id: 1,
                    name: "Dmitry K.",
                    city: "Minsk",
                    datBir: "2 january",
                    education: "BSU'11",
                    webSite: "https://it-kamasutra.com",
                    userImg: "./img/user-photo.png"
                }
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        navbarData: {
            navLinks: [
                {id: 1, link: "/profile", title: "Profile"},
                {id: 2, link: "/dialogs", title: "Messages"},
                {id: 3, link: "/news", title: "News"},
                {id: 4, link: "/music", title: "Music"},
                {id: 5, link: "/settings", title: "Settings"},
            ],
            navFriends: [
                {id: 1, img: "./img/frinds-photo.png", name: "Andrew"},
                {id: 2, img: "./img/frinds-photo.png", name: "Sasha"},
                {id: 3, img: "./img/frinds-photo.png", name: "Sveta"}
            ]
        }
    },
    _callSubscriber() {},

    getState() { return this._state; },
    subscribe(observer) { this._callSubscriber = observer; },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navbarData = navbarReducer(this._state.navbarData, action);

        this._callSubscriber(this._state);
    }
};

export default store;