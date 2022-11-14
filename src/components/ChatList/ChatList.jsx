import React from "react";
import {Link, Outlet} from "react-router-dom";

import './ChatList.module.css';
import {Avatar} from "@mui/material";
import {Form} from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {clearMessages, initMessageForChat} from "../../store/messages/actions";
import {addChat, deleteChat} from "../../store/chats/actions";


export const ChatList = () => {
    const chats = useSelector(selectChats)
    const dispatch = useDispatch()

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
        }
        dispatch(addChat(newChat))
        dispatch(initMessageForChat(newChat.id))
    }
    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id))
        dispatch(clearMessages(id))
    }
    return (
        <>
            <div style={{
                width: '13%',
                height: '100%',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid gray',
                backgroundColor: 'gray'
            }}>
                <ul style={{}}>
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
                                width:'25px',
                                height:'25px',
                                borderRadius:'5px',
                                backgroundColor:'red'
                            }}
                            onClick={()=>handleRemoveChat(chat.id)}>
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