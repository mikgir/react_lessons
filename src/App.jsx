import './App.css';
import './index.css';

import {useEffect, useState} from "react";
import {MessageForm} from "./components/Form/MessageForm";
import {AUTHORS} from "./utils/constants";
import {MessageList} from "./components/Message/MessageList";
import {List} from "@mui/material";


const chats = [
    {
        id: Date.now(),
        name: 'first chat'
    },
    {
        id: Date.now(),
        name: 'second chat'
    },
    {
        id: Date.now(),
        name: 'third chat'
    }
]

export const App = () => {
    const [messageList, setMessageList] = useState([])
    const [chatList]=useState(chats)

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
        return ()=>{
            clearTimeout(timeout)
        }
    }, [messageList])


    return (
        <div className="App">
            <List sx={'width: 30%'}>
                <ul>
                    {chatList.map((chat)=>(
                        <li key={chat.id}>{chat.name}</li>
                    ))}
                </ul>
            </List>
            <div className={"chat_field"}>
                <MessageList messageList={messageList}/>
                <MessageForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


