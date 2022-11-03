import './MessageForm.module.css'
import {useState} from "react";
import {Button, Input} from "@mui/material";


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
        <Input sx={"width: 100%"}
               variant={'outlined'}
               type={"text"}
               value={value}
               onChange={handleChange}
               className={'inputText'}
               placeholder={'message'}/>
        <Button variant={'contained'}
                type={'submit'}>
            Send
        </Button>
    </form>

}