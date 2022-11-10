import React from "react";

export const Message = (text, author) => {
    return <>
            {author}: {text}
    </>
}