import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setName, toggleCheckbox} from "../../store/profile/actions";
import {selectName, selectShowName} from '../../store/profile/selectors'
import {Checkbox} from "@mui/material";
import {Form} from "../../components/Form/Form";

export const Profile = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectName)
    const showName = useSelector(selectShowName)

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }

    const handleSubmit = (text) => {
        dispatch(setName(text))
    }
    return (

        <div style={{
            width: '50%',
            margin: '0 auto'
        }}>
            <h1>Profile</h1>
            {showName && <span>{name}</span>}<br/>
            <Checkbox
                onChange={handleChange}
                inputProps={{'aria-label': 'controlled'}}
            />
            <Form onSubmit={handleSubmit}/>
        </div>
    )
}