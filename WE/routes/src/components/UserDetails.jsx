import { createContext } from "react";
import { AuthContext } from "../contexts/AuthContext"
import { useEffect, useState } from "react";
import { useParams, Navigate ,useContext} from "react-router-dom";
export const UserDetails = () => {
    const { userid } = useParams();
    const [user, setUser] = useState({});
    const {token } =useContext(AuthContext)
    console.log("userid",userid)
    useEffect(() => { 
        fetch(`https://reqres.in/api/users/${userid}`).then(d => d.json()).then(d => setUser(d.data));
    },[userid])
    // if (true) {
    //     return <Navigate to={"/login"} />
    //  }
    console.log("user",user)
    return (
        <div>
            <div>{user.email} is logged in</div>   
            <div><img src={user.avatar} /></div>
        </div>
        // <>{user}</>
    )
}