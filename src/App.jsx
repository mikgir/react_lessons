import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";

import './App.css';
import './index.css';
import {Header} from "./components/header/Header";
import {Home} from "./screens/Home/Home";
import {Profile} from "./screens/Profile/Profile";
import {ChatList} from "./components/ChatList/ChatList";
import {NotFound} from "./components/pages/NotFoundPage";
import {Chat} from "./screens/Chat/Chat";
import {ThemeContext} from "./utils/ThemeContext";
import {Articles} from "./screens/Articles/Articles";


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
        return (
        <div className="App">
            <ThemeContext.Provider value={{theme, changeTheme: toggleTheme}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Header/>}>
                            <Route path='/' element={<PublicRoute authed={authed}/>}>
                                <Route path='' element={<Home onAuth={handleLogin}/>}/>
                            </Route>
                            <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
                                <Route path='' element={<Profile outAuth={handleLogout}/>}/>
                            </Route>
                            <Route path='/articles' element={<Articles/>}/>
                            <Route path='/chats'
                                   element={<ChatList/>}>
                                <Route path=':id' element={<Chat/>}/>
                            </Route>
                            <Route path='*' element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}


