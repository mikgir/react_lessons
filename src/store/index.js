import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./messages/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )