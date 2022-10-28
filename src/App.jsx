import './App.css';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Home} from "./components/pages/Home";
import {Profile} from "./components/pages/Profile";
import {ChatList} from "./components/pages/ChatList";
import {NotFound} from "./components/pages/NotFoundPage";




export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Header/>}>
                            <Route index element={<Home/>}/>
                            <Route path='profile' element={<Profile/>}/>
                            <Route path='chats' element={<ChatList/>}>
                                <Route path=':chatId' element={<ChatList/>}/>
                            </Route>
                            <Route path='*' element={<NotFound/>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}


