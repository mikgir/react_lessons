import React from "react";

import PropTypes from 'prop-types';
import {Avatar} from "@mui/material";
import styles from './Message.module.css'

export const Message = ({text, author}) => {
    return (
        <div className={styles.message_list}>
            <div>
                <Avatar/>
                {author}:
            </div>
            <div className={styles.message_item}>
                {text}
            </div>
        </div>
    )
}
Message.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string.isRequired
}
