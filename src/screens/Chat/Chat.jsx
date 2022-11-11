import React, {useContext, useEffect, useRef} from "react";
import {useParams, Navigate} from "react-router-dom";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {AUTHORS} from "../../utils/constants";
import {ThemeContext} from "../../utils/ThemeContext";


export const Chat = ({messages, addMessage}) => {
    const {id} = useParams()
    const timeout = useRef()
    const wrapperRef = useRef()
    const {theme}=useContext(ThemeContext)



    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text: text,
            id: `msg-${Date.now()}`
        }, id )
    }
    useEffect(() => {
        const lastMessage = messages[id]?.[messages[id]?.length -1]
        if (lastMessage?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: 'hello friend',
                    id: `msg-${Date.now()}`
                }, id )
            }, 1500)
        }
        return () => {
            clearTimeout(timeout.current)
        }
    }, [messages])

    if (!messages[id]) {
        return <Navigate to='/chat' replace/>
    }
    return (
        <div ref={wrapperRef} style={{
            width:'80%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            padding:'20px',
            backgroundColor: theme === 'dark'? 'black':'whitesmoke'
        }}>
            <MessageList messageList={messages[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    )
}