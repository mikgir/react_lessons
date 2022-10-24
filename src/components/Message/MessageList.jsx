
export const MessageList = ({messageList}) => {
    return <ul>
        {
            messageList.map((message, index) => {
                return <li key={index}>
                    <h4>from: {message.name}</h4>
                    <p>message: {message.text}</p>
                </li>
            })
        }
    </ul>
}