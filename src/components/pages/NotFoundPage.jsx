import React from "react";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>404 page not found</h1>
            <Link to='/'> to home page</Link>
        </div>
    )
}