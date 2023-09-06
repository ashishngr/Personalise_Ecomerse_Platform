
import {
    useLocation, 
    Navigate
} from "react-router-dom";

export default function RequireAuth({children}){
    const location = useLocation();

    let token = localStorage.getItem("access_token"); 
    if(!token){
        return <Navigate to="/" state={{from: location}} replace/>
    }
}