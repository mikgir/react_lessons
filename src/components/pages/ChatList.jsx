import {useState} from "react";
import {CHATS} from "../../utils/constants";
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";


export const ChatList = () => {
    const {chatId} = useParams()
    const [chatList, setChatList] = useState(CHATS)

    const id = chatList.findIndex(x => x.id === chatId)
    return (
        <div style={{
            height: '80vh',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div style={{
                width: '30%',
                backgroundColor: 'aliceblue',
                border: '1px solid blue'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Chats</h1>
                <ul style={{
                    textAlign: 'center'
                }}>
                    {chatList.map((chat, id) =>
                        <li key={id}><Link to={`${id}`}>{chat.name}</Link></li>
                    )}
                </ul>
                <Button style={{color: 'blue'}} onClick={() => {
                    setChatList([...chatList, {id: id + 1, name: 'newChat', messages: []}])
                }}>add chat</Button>
            </div>
            <div className={'chat_field'}>
                {
                    chatId && chatList[chatId] ? <div>
                        {chatList[chatId].messages.map((msg, idx) =>
                            <p key={idx}>{msg}</p>
                        )}
                    </div> : <h2>Select chat</h2>
                }
            </div>
        </div>
    )

}