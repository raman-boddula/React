import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <Link to="/">Home page</Link>
            <Link to="/about">About Page</Link>
            <Link to="/contactus">Contage page</Link>
            <Link to="/users">Users page</Link>
            
        </>
    )
}