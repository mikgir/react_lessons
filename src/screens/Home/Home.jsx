import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from './Home.module.css'

import {LoginForm} from "../../components/LoginForm/LoginForm";
import {logIn, singUp} from "../../services/firebase";

export const Home = ({onAuth, isSignUp}) => {
    const [error, setError] = useState('')
    const handleSubmit = async ({login, pass}) => {

        try {
            if (isSignUp){
                await singUp(login, pass)
            }else {
                await logIn(login, pass)
            }
        } catch (e){
            setError(e.message)
        }

    }
    return (
        <>
            <section className={styles.home_section}>
                <h1>Home page</h1>
                <div>
                    <LoginForm onSubmit={handleSubmit}/>
                    {error && <h5>{error}</h5>}
                    <Link to={isSignUp ? '/' : '/signup'}>
                        {isSignUp ? 'to login' : 'to signup'}
                    </Link>
                </div>
            </section>
        </>
    )
}