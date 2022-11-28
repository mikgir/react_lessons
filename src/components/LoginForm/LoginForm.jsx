import React, {useState} from "react";

import styles from './LoginForm.module.css'

export const LoginForm = ({onSubmit}) => {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const handleChangeLogin = (event) => {
        setLogin(event.target.value)
    }
    const handleChangePass = (event) => {
        setPass(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({login, pass})

        setLogin('')
        setPass('')
    }

    return (
        <form
            className={styles.login_form}
            onSubmit={handleSubmit}>
            <label className={styles.login_input_label}
            > email
            </label>
            <input type='email' value={login}
                   className={styles.login_input}
                   onChange={handleChangeLogin}/>

            <label className={styles.login_input_label}
            > password
            </label>
            <input type='password' value={pass}
                   className={styles.login_input}
                   onChange={handleChangePass}/>
            <button type='submit'
                    className={styles.login_btn}>
                login
            </button>
        </form>
    )
}