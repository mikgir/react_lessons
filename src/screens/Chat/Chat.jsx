import React, {useContext, useEffect, useMemo, useRef} from "react";
import {useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {AUTHORS} from "../../utils/constants";
import {ThemeContext} from "../../utils/ThemeContext";
import {selectMessageByChatId} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages/actions";


export const Chat = () => {
    const {id} = useParams()
    const getMessages = useMemo(()=> selectMessageByChatId(id), [id])
    const messages = useSelector(getMessages)
    const dispatch = useDispatch()

    // const timeout = useRef()
    const wrapperRef = useRef()
    const {theme} = useContext(ThemeContext)


    const sendMessage = (text) => {
        dispatch(addMessage({
            author: AUTHORS.human,
            text: text,
            id: `msg-${Date.now()}`
        }, id))
    };

    // useEffect(() => {
    //     const lastMessage = [messages.length - 1];
    //     if (lastMessage.author === AUTHORS.human) {
    //         timeout.current = setTimeout(() => {
    //             dispatch(
    //                 addMessage({
    //                     id: `msg-${Date.now()}`,
    //                     author: 'ms. robot',
    //                     text: 'hello friend'
    //                 }, id)
    //             )
    //         }, 1000)
    //     }
    //     return () => {
    //         clearTimeout(timeout.current)
    //     }
    // }, [messages])

    if (!messages) {
        return <Navigate to='/chats' replace/>
    }
    return (
        <div ref={wrapperRef} style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px',
            backgroundColor: theme === 'dark' ? 'whitesmoke' : 'black'
        }}>
            <MessageList messageList={messages}/>
            <Form onSubmit={sendMessage}/>
        </div>
    )
}