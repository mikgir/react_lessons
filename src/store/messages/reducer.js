import {ADD_MESSAGE, CLEAR_MESSAGE_FOR_CHAT, INIT_MESSAGE_FOR_CHAT} from "./actions";

const initialState = {}
export const messageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: [...state[payload.chatId], payload.newMsg]
            }
        }
        case INIT_MESSAGE_FOR_CHAT: {
            return {
                ...state,
                [payload]: []
            }
        }
        case CLEAR_MESSAGE_FOR_CHAT: {
            const copy = {...state}
            delete copy[payload]
            return copy
        }
        default:
            return state
    }
}