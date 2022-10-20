import style from './Message.module.css';


export const MessageList = ({messageList}) => {

    return <ul className={style.message}>
        {messageList.map((message, index)=>{
            return <li key={message.id}>
                <h4>{message.name}</h4>
                <p>{message.text}</p>
            </li>
        })
        }

    </ul>

}