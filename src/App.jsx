import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import './index.css';
import {Header} from "./components/header/Header";
import {Home} from "./screens/Home/Home";
import {Profile} from "./screens/Profile/Profile";
import {ChatList} from "./components/ChatList/ChatList";
import {NotFound} from "./components/pages/NotFoundPage";
import {Chat} from "./screens/Chat/Chat";

const initChats = [
    {
        name: 'Chat 1',
        id: 'chat1'
    },
    {
        name: 'Chat 2',
        id: 'chat2'
    },
    {
        name: 'Chat 3',
        id: 'chat3'
    }
]
const initMessages = initChats.reduce((acc, chat) => {
    acc[chat.id] = []
    return acc
}, {})

export const App = () => {
    const [chats, setChats] = useState(initChats)
    const [messages, setMessages] = useState(initMessages)

    const addMessage = (newMsg, id) => {
        setMessages({...messages, [id]: [...messages[id], newMsg]})
    }
    const addChat = (newChat) => {
        setChats((prevChats) => [...prevChats, newChat])
        setMessages((prevMessages) => ({...prevMessages, [newChat.id]: []}))
    }
    const deleteChat = (id) => {
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== id))
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/chats'
                               element={<ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}/>}>
                            <Route path=':id' element={<Chat messages={messages} addMessage={addMessage}/>}/>
                        </Route>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


