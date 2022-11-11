import React from "react";
import {Link, Outlet} from "react-router-dom";

import './ChatList.module.css';
import {Avatar} from "@mui/material";
import {Form} from "../Form/Form";


export const ChatList = ({chats, addChat, deleteChat}) => {

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
        }
        addChat(newChat)
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
                            onClick={() => deleteChat(chat.id)}>
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