import React from "react";

export const Message = (text, author) => {
    return <>
        <li>
            message: {text}<br/>
            from: {author}
        </li>
    </>
}