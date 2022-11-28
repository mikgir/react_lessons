import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    initProfileTrack,
    setNameFB,
    stopProfileTrack,
    toggleCheckbox
} from "../../store/profile/actions";

import styles from './Profile.module.css'

import {selectName, selectShowName} from '../../store/profile/selectors'
import {Checkbox} from "@mui/material";
import {Form} from "../../components/Form/Form";
import {auth, logOut} from "../../services/firebase";


export const Profile = () => {
    const dispatch = useDispatch()

    const name = useSelector(selectName)
    const showName = useSelector(selectShowName)

    const handleChange =  () => {
        dispatch(toggleCheckbox)
    }

    const handleSubmit = (text) => {
        dispatch(setNameFB(text))
    }
    useEffect(() => {
       dispatch(initProfileTrack())
        return () => {
         dispatch(stopProfileTrack())
        }
    }, [])
    return (

        <div className={styles.profile_section}>
            <h1>Profile</h1>
            <button
                className={styles.logout_btn}
                onClick={logOut}>
                loguot
            </button>
            <div className={styles.profile_form}>
                {showName && <div className={styles.user_data}>
                    <span>Name - {name}</span>
                    <span>email - {auth.currentUser.email}</span>
                </div>}<br/>
                <Checkbox
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
                <Form onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}