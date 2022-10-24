import './MessageForm.module.css'
import {useState} from "react";


export const MessageForm = ({onSubmit}) => {
    const [newText, setNewText] = useState('')

    const handleMessage = (event) => {
        setNewText(event.target.value)
    }
    const addMessage = (event) => {
        event.preventDefault()
        onSubmit(newText)
    }

    return <form onSubmit={addMessage}>
        <label>Text<br/>
            <input type={"text"} onChange={handleMessage} className={'inputText'}
                   placeholder={'message'}/>
        </label>
        <button>Send</button>
    </form>

}