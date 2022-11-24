import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import './ChatList.module.css';
import {Avatar} from "@mui/material";
import {Form} from "../Form/Form";
// import {useDispatch, useSelector} from "react-redux";
// import {selectChats} from "../../store/chats/selectors";
// import {clearMessages, initMessageForChat} from "../../store/messages/actions";
// import {addChat, deleteChat, initChatTrack} from "../../store/chats/actions";
import {onValue, set, remove} from "firebase/database";
import {chatsRef, getChatRefById, getMsgRefById} from "../../services/firebase";


export const ChatList = () => {
    const [chats, setChats] = useState([])
    // const chats = useSelector(selectChats)
    // const dispatch = useDispatch()

    const handleSubmit = async (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
        }
        await set(getChatRefById(newChat.id), newChat)
        await set(getMsgRefById(newChat.id), {exists: true})
    }

    const handleRemoveChat = (id) => {
        remove(getChatRefById(id))
        set(getMsgRefById(id), null)

    }
    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            setChats(Object.values(snapshot.val() || {}))
        })
        return unsubscribe
    }, [])
    return (
        <>
            <div style={{
                width: '15%',
                height: '100vh',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid gray',
                backgroundColor: 'gray'
            }}>
                <ul style={{
                    width: '70%',
                    height: '80%'
                }}>
                    {chats.map((chat) => (
                        <li key={chat.id} style={{
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Avatar/>
                            <Link to={`/chats/${chat.id}`}>
                                {chat.name}
                            </Link>
                            <button style={{
                                width: '25px',
                                height: '25px',
                                borderRadius: '5px',
                                backgroundColor: 'red'
                            }}
                                    onClick={() => handleRemoveChat(chat.id)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <Form onSubmit={handleSubmit}/>
            </div>
            <Outlet/>
        </>
    )

}