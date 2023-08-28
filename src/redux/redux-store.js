import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import navbarReducer from "./reducers/navbar-reducer";

const reducersGroup = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navbarData: navbarReducer
});

let store = createStore(reducersGroup);

export default store;