export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const INIT_MESSAGE_FOR_CHAT='MESSAGES::INIT_MESSAGE_FOR_CHAT'
export const CLEAR_MESSAGE_FOR_CHAT = 'MESSAGES::CLEAR_MESSAGE_FOR_CHAT';

export const addMessage = (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMsg,
        chatId
    }
})
export const initMessageForChat = (chatId) => ({
    type: INIT_MESSAGE_FOR_CHAT,
    payload: chatId
})
export const clearMessages = (chatId) => ({
    type: CLEAR_MESSAGE_FOR_CHAT,
    payload: chatId
})