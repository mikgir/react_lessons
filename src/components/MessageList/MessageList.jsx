import React from 'react'

export const MessageList = ({messageList}) => {
    return <ul style={{
        textDecoration:'none'
    }}>
        {messageList.map((msg) => (
            <li key={msg.id} style={{
                textDecoration:'none'
            }}>
                {msg.author} : {msg.text}
            </li>
        ))}
    </ul>
}