const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    usersData: [
        {
            id: 1,
            fullName: "Dmitry K",
            followed: false,
            status: "I am looking for a job right now...",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            fullName: "Svetlana D",
            followed: false,
            status: "I am so pretty",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            fullName: "Sergei S",
            followed: true,
            status: "I like football!!!",
            location: {city: "Kyiv", country: "Ukraine"}
        },
        {
            id: 4,
            fullName: "Andrew F",
            followed: true,
            status: "I am free to help you",
            location: {city: "Philadelphia", country: "United States"}
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userID) return {...u, followed: true};

                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userID) return {...u, followed: false};

                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;