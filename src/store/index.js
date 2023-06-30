import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./messages/reducer";
import {articleReducer} from "./articles/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {postReducer} from "./posts/reducer";

const persistConfig = {
    key: 'messenger',
    storage,
    blacklist: [],
    whitelist: ['chats', 'messages'],
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer,
    articles: articleReducer,
    posts: postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export const persistor = persistStore(store)



