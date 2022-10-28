import {MessageList} from "../Message/MessageList";
import {MessageForm} from "../Form/MessageForm";
import {useEffect, useState} from "@types/react";
import {AUTHORS} from "../../utils/constants";


export const Chats = ({chat}) => {
    const [messageList, setMessageList] = useState([])

    const sendMessage = (newText) => {
        setMessageList([...messageList, {text: newText, sender: AUTHORS.human}])

    }
    useEffect(() => {
        let timeout;
        if (messageList[messageList.length - 1]?.sender === AUTHORS.human) {
            timeout = setTimeout(() => {
                setMessageList([...messageList, {text: "hello friend", sender: AUTHORS.robot}])
            }, 1500)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [messageList])
    return (
        <>
            <MessageList messageList={messageList}/>
            <MessageForm onSubmit={sendMessage}/>
        </>
    )
}