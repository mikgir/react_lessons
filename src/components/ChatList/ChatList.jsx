import React from "react";

import {Link, Outlet} from "react-router-dom";
import {Avatar, List, ListItem} from "@mui/material";
import {MessageForm} from "../Form/MessageForm";


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
            <div className={'chats_menu'}>
                <List>
                    {chats.map((chat) => (
                        <Link to={`/chats/${chat.id}`} key={chat.id}>
                            <ListItem>
                                <Avatar/>
                                {chat.name}
                            </ListItem>
                            <span onClick={()=>deleteChat(chat.id)}>X</span>
                        </Link>

                    ))}
                </List>
                <MessageForm onSubmit={handleSubmit}/>
            </div>
            <Outlet/>
        </>
    )

}