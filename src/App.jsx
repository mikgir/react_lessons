import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";

import './App.css';
import './index.css';
import {Dashboard} from "./components/dashboard/Dashboard";
import {Home} from "./screens/Home/Home";
import {Profile} from "./screens/Profile/Profile";
import {ChatList} from "./components/ChatList/ChatList";
import {NotFound} from "./components/pages/NotFoundPage";
import {Chat} from "./screens/Chat/Chat";
import {ThemeContext} from "./utils/ThemeContext";
import {Articles} from "./screens/Articles/Articles";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./services/firebase";
import {Posts} from "./screens/Posts/Posts";


export const App = () => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }
    const [authed, setAuthed] = useState(false)
    const handleLogin = () => {
        setAuthed(true)
    }
    const handleLogout = () => {
        setAuthed(false)

    }
    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleLogin()
            } else {
                handleLogout()
            }
        })
        return unsubscibe
    }, [])
    return (
        <div className="App">
            <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
                <BrowserRouter>
                    <Dashboard/>
                    <Routes>
                        <Route path='/' element={<PublicRoute authed={authed}/>}>
                            <Route path='' element={<Home onAuth={handleLogin}/>}/>
                            <Route path='signup' element={<Home onAuth={handleLogin} isSignUp/>}/>
                        </Route>
                        <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
                            <Route path='' element={<Profile outAuth={handleLogout}/>}/>
                        </Route>
                        <Route path='/articles' element={<PrivateRoute authed={authed}/>}>
                            <Route path='' element={<Articles/>}/>
                        </Route>
                        <Route path='/posts' element={<PrivateRoute authed={authed}/>}>
                            <Route path='' element={<Posts/>}/>
                        </Route>
                        <Route path='/chats'
                               element={<ChatList/>}>
                            <Route path=':id' element={<Chat/>}/>
                        </Route>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}


