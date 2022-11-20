import React, {useContext, useEffect, useMemo, useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {AUTHORS} from "../../utils/constants";
import {ThemeContext} from "../../utils/ThemeContext";
import {selectMessageByChatId} from "../../store/messages/selectors";
import {addMessageWithReply} from "../../store/messages/actions";
import {onValue, push} from "firebase/database";
import {auth, getMsgListRefById, getMsgRefById} from "../../services/firebase";


export const Chat = () => {
    const {id} = useParams()
    const [messages, setMessages] = useState([])
    const getMessages = useMemo(()=> selectMessageByChatId(id), [id])
    // const messages = useSelector(getMessages)
    const dispatch = useDispatch()

    const {theme} = useContext(ThemeContext)


    const sendMessage = (text) => {
       push(getMsgListRefById(id), {
           author: auth.currentUser.email,
           text: text,
           id: `msg-${Date.now()}`
       })
        // dispatch(addMessageWithReply({
        //     author: AUTHORS.human,
        //     text: text,
        //     id: `msg-${Date.now()}`
        // }, id))
    };
    useEffect(()=>{
        const unsubscribe = onValue(getMsgRefById(id), snapshot => {
            console.log(snapshot.val())
            if (!snapshot.val().exists){
                setMessages(null)
            } else {
                setMessages(Object.values(snapshot.val().messageList || {}))
            }
        })

        return unsubscribe
    }, [id])

    if (!messages) {
        return <Navigate to='/chats' replace/>
    }
    return (
        <div style={{
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