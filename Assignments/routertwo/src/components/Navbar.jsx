import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Settings } from "./setting";
export const Navbar = () => {
    return (
        <>
            <Link to="/login" element={Login}>Login</Link> &ensp;&ensp;&ensp;&ensp;
            <Link to="/dashboard" element={Dashboard}>Dashboard</Link>&ensp;&ensp;&ensp;&ensp;
            <Link to="/settings" element={Settings}>Settings</Link>&ensp;&ensp;&ensp;&ensp;
        </>
    )
}