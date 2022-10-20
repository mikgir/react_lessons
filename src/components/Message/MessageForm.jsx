// import './MessageForm.module.css'
// import {useRef, useState} from "react";
//
// export const MessageForm = ({message, addMessage}) => {
//     const [newMessage, setNewMessage] = useState({name: '', text: ''})
//     const sender = useRef()
//     const senderText = useRef()
//
//     const handleMessage = () => {
//         const senderName = sender.current.value
//         const senderTextValue = senderText.current.value
//         setNewMessage({name: senderName, text: senderTextValue})
//     }
//
//     const sendMessage = () => {
//         addMessage(message=newMessage)
//         sender.current.value = ''
//         senderText.current.value = ''
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault()
//     }
//     return <form onSubmit={handleSubmit}>
//         <label>Name<br/>
//             <input type={"text"} ref={sender} onChange={handleMessage} className={'inputName'} placeholder={'name'}/>
//         </label>
//         <label>Text<br/>
//             <input type={"text"} ref={senderText} onChange={handleMessage} className={'inputText'}
//                    placeholder={'message'}/>
//         </label>
//         <button onClick={sendMessage}>Send</button>
//     </form>
//
// }