import React, {useContext} from "react";
import {PropTypes} from "@mui/material";
import {ThemeContext} from "../../utils/ThemeContext";

export const Message = ({text, author}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={'message'}>
            <span style={{color: theme === 'dark' ? 'white' : 'black'}}>
                {author}:
            </span>
            <span style={{color: theme === 'dark' ? 'white' : 'black'}}>
                {text}
            </span>
        </div>
    )
}
Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string
}