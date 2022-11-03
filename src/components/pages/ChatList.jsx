import React, {useState} from "react";
import {CHATS} from "../../utils/constants";
import {Link, useParams} from "react-router-dom";
import {Button, List, ListItem} from "@mui/material";


export const ChatList = () => {
    const {chatId} = useParams()
    const [chatList, setChatList] = useState(CHATS)

    const id = chatList.findIndex(x => x.id === chatId)
    return (
        <div className={'chats_wrapper'}>
            <div className={'chats_menu'}>
                <List>
                    {chatList.map((chat, id) =>
                        <ListItem key={id}><Link to={`${id}`}>{chat.name}</Link></ListItem>
                    )}
                </List>
                <Button style={{color: 'blue'}} onClick={() => {
                    setChatList([...chatList, {id: id + 1, name: 'newChat', messages: []}])
                }}>add chat</Button>
            </div>
            <div className={'chat_field'}>
                {
                    chatId && chatList[chatId] ? <div>
                        {chatList[chatId].messages.map((msg, idx) =>
                            <p key={idx}>{msg}</p>
                        )}
                    </div> : <h2>Select chat</h2>
                }
            </div>
        </div>
    )

}