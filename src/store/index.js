import {createStore} from "redux";
import {profileReducer} from "./profile/reducer";

export const store = createStore(
    profileReducer,
    window._REDUX_DEVTOOLS_EXTENTION_ && window._REDUX_DEVTOOLS_EXTENTION_()
    )