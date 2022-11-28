import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import  styles from './ChatList.module.css';
import {Avatar} from "@mui/material";
import {Form} from "../Form/Form";

import {onValue, set, remove} from "firebase/database";
import {chatsRef, getChatRefById, getMsgRefById} from "../../services/firebase";


export const ChatList = () => {
    const [chats, setChats] = useState([])

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
            <div className={styles.chats_container}>
                <ul className={styles.container_list}>
                    {chats.map((chat) => (
                        <li key={chat.id} className={styles.list_item}>
                            <Avatar/>
                            <Link to={`/chats/${chat.id}`}>
                                {chat.name}
                            </Link>
                            <button className={styles.close_btn}
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