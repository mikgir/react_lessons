import React, {useEffect, useRef} from "react";
import {useParams, Navigate} from "react-router-dom";

import {MessageList} from "../../components/MessageList/MessageList";
import {MessageForm} from "../../components/Form/MessageForm";
import {AUTHORS} from "../../utils/constants";


export const Chat = ({messages, addMessage}) => {
    const {id} = useParams()
    // const [messages, setMessages] = useState(initMessages)
    const timeout = useRef()
    const wrapperRef = useRef()



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
        <div ref={wrapperRef}>
            <MessageList messageList={messages[id]}/>
            <MessageForm onSubmit={sendMessage}/>
        </div>
    )
}