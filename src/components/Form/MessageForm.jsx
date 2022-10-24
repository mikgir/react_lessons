import './MessageForm.module.css'
import {useState} from "react";


export const MessageForm = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit(value)
        setValue('')
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return <form onSubmit={handleSubmit}>
            <input type={"text"}
                   value={value}
                   onChange={handleChange}
                   className={'inputText'}
                   placeholder={'message'}/>
        <button>Send</button>
    </form>

}