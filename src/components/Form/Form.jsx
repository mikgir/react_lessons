import './Form.module.css'
import React, {useState} from "react";
import {Button, Input} from "@mui/material";
import * as styles from './Form.module.css'


export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit(value)
        setValue('')
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form
            className={styles.messageForm}
            onSubmit={handleSubmit}
        >
        <Input variant={'outlined'} sx={{
            width: '80%'
        }}
               type={"text"}
               value={value}
               onChange={handleChange}
               className={'inputText'}/>
        <Button variant={'contained'}
                sx={{width: '18%'}}
                type={'submit'}>
            add
        </Button>
    </form>
    )
}