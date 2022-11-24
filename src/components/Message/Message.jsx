import React from "react";

import PropTypes from 'prop-types';
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
Message.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string.isRequired
}
