import React, {useContext} from 'react'
import {ThemeContext} from "../../utils/ThemeContext";

export const MessageList = ({messageList}) => {
    const {theme} = useContext(ThemeContext)

    return <ul style={{
        textDecoration: 'none'
    }}>
        {messageList.map((msg) => (
            <li key={msg.id} style={{
                textDecoration: 'none'
            }}>
                <span style={{color: theme === 'dark' ? 'white' : 'black'}}>
                    {msg.author}
                </span>
                :
                <span style={{color: theme === 'dark' ? 'white' : 'black'}}>
                    {msg.text}
                </span>
            </li>
        ))}
    </ul>
}