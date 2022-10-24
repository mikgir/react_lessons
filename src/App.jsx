import './App.css';
import './index.css';

import {useEffect, useState} from "react";
import {MessageForm} from "./components/Form/MessageForm";
import {AUTHORS} from "./utils/constants";
import {MessageList} from "./components/Message/MessageList";


export const App = () => {
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
        return ()=>{
            clearTimeout(timeout)
        }
    }, [messageList])


    return (
        <div className="App">
            <div className={"chat_field"}>
                <MessageList messageList={messageList}/>
                <MessageForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


