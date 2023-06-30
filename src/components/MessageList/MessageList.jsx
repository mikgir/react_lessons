import React from 'react'
import {Message} from "../Message/Message";

export const MessageList = ({messageList}) => {

    return (<>
        {messageList.map((msg) => (
            <div key={msg.id}>
                <Message text={msg.text} author={msg.author}/>
            </div>
        ))}
    </>)
}