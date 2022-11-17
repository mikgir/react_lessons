import React from 'react';

export const Home = ({onAuth}) => {
    return (
        <div>
        <h1>Home page</h1>
            <div>
                <button onClick={onAuth}>login</button>
            </div>
    </div>
    )
}