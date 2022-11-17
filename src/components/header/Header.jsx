import {NavLink, Outlet} from "react-router-dom"
import {List, ListItem} from "@mui/material";
import React, {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext";

export const Header = () => {
    const {changeTheme}=useContext(ThemeContext)
    return (
        <header className={'header'}>
            <List className={'menu_list'} sx={{
                padding: '1rem',

            }}>
                <button onClick={changeTheme}>
                    theme
                </button>
                <ListItem>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'white'})}
                             to='/'>
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'white'})}
                             to='/profile'>
                        Profile
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'white'})}
                             to='/articles'>
                        Articles
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'white'})}
                             to='/chats'>
                        Chats
                    </NavLink>
                </ListItem>
            </List>
            <Outlet/>
        </header>
    )

}