import React from "react";
import {Avatar} from "@mui/material";

export const Message = ({text, author}) => {
    return (
        <div className={'message'}>
            <div>
                <Avatar/>
                {author}:
            </div>
            <div style={{
                height: 'max-content',
                borderRadius: '25px',
                backgroundColor: 'blue',
                marginLeft:'10px',
                padding: '1rem',
                color: 'white',

            }}>
                {text}
            </div>
        </div>
    )
}
