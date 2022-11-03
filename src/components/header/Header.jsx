import {Link, Outlet} from "react-router-dom"
import {List, ListItem} from "@mui/material";

export const Header = () => {
    return (
        <header className={'header'}>
            <List className={'menu_list'}>
                <ListItem><Link to='/'>Home</Link></ListItem>
                <ListItem><Link to='/profile'>Profile</Link></ListItem>
                <ListItem><Link to='/chats'>Chats</Link></ListItem>
            </List>
            <Outlet/>
        </header>
    )

}