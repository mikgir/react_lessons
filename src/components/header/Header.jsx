import {Link, Outlet} from "react-router-dom"

export const Header = () => {
    return (
        <header style={{width:'90%',
            height:'2rem',
            margin:'0 auto',
            backgroundColor:'gray',
        }}>
            <ul style={{margin:'0 auto',
                width:'50%',
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'}}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/chats'>Chats</Link></li>
            </ul>
            <main style={{
                height:'90vh'
            }}>
                <Outlet/>
            </main>
        </header>
    )

}