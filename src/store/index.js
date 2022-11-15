import {combineReducers, createStore,applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./messages/reducer";

const persistConfig = {
    key: 'messenger',
    storage,
    blacklist: [],
    whitelist: ['chats', 'messages'],
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)



