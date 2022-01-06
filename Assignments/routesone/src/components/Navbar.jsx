import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <Link to="/">Home page</Link>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <Link to="/products">Product's Page</Link>
        </>
    )
}