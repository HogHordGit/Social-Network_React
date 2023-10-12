const initialState = {
    navLinks: [
        {id: 1, link: "/profile", title: "Profile"},
        {id: 2, link: "/dialogs", title: "Messages"},
        {id: 3, link: "/news", title: "News"},
        {id: 4, link: "/music", title: "Music"},
        {id: 5, link: "/users", title: "Find users"},
        {id: 6, link: "/settings", title: "Settings"},
    ],
    navFriends: [
        {id: 1, img: "./img/frinds-photo.png", name: "Andrew"},
        {id: 2, img: "./img/frinds-photo.png", name: "Sasha"},
        {id: 3, img: "./img/frinds-photo.png", name: "Sveta"}
    ]
};

export const navbarReducer = (state = initialState, action) => {


    return state;
};

export default navbarReducer;