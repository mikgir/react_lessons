import React, {useContext, useMemo, useRef} from "react";
import {useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {AUTHORS} from "../../utils/constants";
import {ThemeContext} from "../../utils/ThemeContext";
import {selectMessageByChatId} from "../../store/messages/selectors";
import {addMessageWithReply} from "../../store/messages/actions";


export const Chat = () => {
    const {id} = useParams()
    const getMessages = useMemo(()=> selectMessageByChatId(id), [id])
    const messages = useSelector(getMessages)
    const dispatch = useDispatch()

    const wrapperRef = useRef()
    const {theme} = useContext(ThemeContext)


    const sendMessage = (text) => {
        dispatch(addMessageWithReply({
            author: AUTHORS.human,
            text: text,
            id: `msg-${Date.now()}`
        }, id))
    };

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