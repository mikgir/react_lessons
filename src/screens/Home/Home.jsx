import React from 'react';

export const Home = ({onAuth}) => {
    return (
        <div style={{
            width: '50%',
            margin: '0 auto',
            display:'flex',
            flexDirection: 'column',
        }}>
        <h1>Home page</h1>
            <div>
                <button
                    style={{
                        width:'5rem',
                        height:'2rem'
                    }}
                    onClick={onAuth}>
                    login
                </button>
            </div>
    </div>
    )
}