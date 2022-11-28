import React, {useContext, useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {ThemeContext} from "../../utils/ThemeContext";
import styles from './Chat.module.css'

import {onValue, push} from "firebase/database";
import {auth, getMsgListRefById, getMsgRefById} from "../../services/firebase";


export const Chat = () => {
    const {id} = useParams()
    const [messages, setMessages] = useState([])
    // const getMessages = useMemo(()=> selectMessageByChatId(id), [id])
    // const messages = useSelector(getMessages)
    // const dispatch = useDispatch()

    const {theme} = useContext(ThemeContext)


    const sendMessage = (text) => {
       push(getMsgListRefById(id), {
           author: auth.currentUser.email,
           text: text,
           id: `msg-${Date.now()}`
       })
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
        <div className={styles.chat_section}>
            <MessageList messageList={messages}/>
            <Form onSubmit={sendMessage}/>
        </div>
    )
}