import {NavLink, Outlet} from "react-router-dom"
import React, {useContext} from "react";

import styles from './Dashboard.module.css'

import {List, ListItem} from "@mui/material";
import {ThemeContext} from "../../utils/ThemeContext";

export const Dashboard = () => {
    const {changeTheme}=useContext(ThemeContext)
    return (
        <section className={styles.dashboard_section}>
            <List className={styles.menu_list} sx={{
                padding: '1rem',

            }}>
                <button
                    className={styles.theme_toggle}
                    onClick={changeTheme}
                >
                    theme
                </button>
                <ListItem>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/articles'>
                        Articles
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/posts'>
                        Posts
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/chats'>
                        Chats
                    </NavLink>
                </ListItem>
            </List>
            <Outlet/>
        </section>
    )

}