import React from 'react'
// import {Message} from "../Message/Message";

export const MessageList = ({messageList}) => {
    return <ul>
        {messageList.map((msg) => (
            <li key={msg.id}>
                {msg.author} : {msg.text}
            </li>
        ))}
    </ul>
}