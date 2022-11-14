import React, {useContext, useEffect, useRef} from "react";
import {useParams, Navigate} from "react-router-dom";

import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {AUTHORS} from "../../utils/constants";
import {ThemeContext} from "../../utils/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages/actions";


export const Chat = () => {
    const messages = useSelector(selectMessages)
    const dispatch = useDispatch()

    const {id} = useParams()
    const timeout = useRef()
    const wrapperRef = useRef()
    const {theme}=useContext(ThemeContext)



    const sendMessage = (text) => {
        dispatch(addMessage({
            author: AUTHORS.human,
            text: text,
            id: `msg-${Date.now()}`
        }, id ))
    }

    // useEffect(()=>{
    //     const lastMessage = messages[id]?.[messages[id]?.length -1];
    //     if (lastMessage?.author === AUTHORS.human){
    //         timeout.current = setTimeout(()=>{
    //             dispatch(
    //                 addMessage({
    //                     id: `msg-${Date.now()}`,
    //                     author: 'ms. robot',
    //                     text: 'hello friend'
    //                 }, id )
    //             )
    //         }, 1000)
    //     }
    //     return ()=>{
    //         clearTimeout(timeout.current)
    //     }
    // })

    if (!messages[id]) {
        return <Navigate to='/chats' replace/>
    }
    return (
        <div ref={wrapperRef} style={{
            width:'80%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            padding:'20px',
            backgroundColor: theme === 'dark'? 'whitesmoke':'black'
        }}>
            <MessageList messageList={messages[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    )
}