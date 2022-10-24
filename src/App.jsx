import './App.css';
import './index.css';

import {useEffect, useState} from "react";
import {MessageForm} from "./components/Message/MessageForm";


const name = 'me';
// const messages = [
//     {
//         sender: name,
//         text: 'text1'
//     },
//     {
//         sender: name,
//         text: 'text2'
//     },
//     {
//         sender: 'robot',
//         text: 'message from robot'
//     }
// ]

export const App = () => {
    const [messageList, setMessageList] = useState([])

    const sendMessage = (newText) => {
        setMessageList([...messageList, {text: newText, sender: name}])
    }
    useEffect(() => {
        if (messageList[messageList.length - 1]?.sender === name) {
            setMessageList([...messageList, {text: "hello friend", sender: "from robot"}])
        }
    }, [messageList])


    return (
        <div className="App">
            <div className={"chat_field"}>
                <ul>
                    {messageList.map((msg, index) => (
                        <li key={index}>
                            message: {msg.text}<br/>
                            from: {msg.sender}
                        </li>
                    ))}
                </ul>
                <MessageForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


