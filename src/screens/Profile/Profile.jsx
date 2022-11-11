import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../../store/profile/actions";
import {Checkbox} from "@mui/material";

export const Profile = () => {
    const dispatch=useDispatch()
    const state = useSelector((state) => state)

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }
    return (

        <div style={{
            width:'50%',
            margin: '0 auto'
        }}>
            <h1>Profile</h1>
            {state.showName && <span>{state.name}</span>}<br/>
            <Checkbox
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    )
}