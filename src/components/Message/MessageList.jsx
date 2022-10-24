
export const MessageList = ({messageList}) => {
    return <ul>
        {messageList.map((msg, index) => (
            <li key={index}>
                {msg.sender} :{msg.text}
            </li>
        ))}
    </ul>
}