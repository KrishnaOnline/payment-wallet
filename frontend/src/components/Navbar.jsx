import { useEffect, useState } from "react";
import { getUserDetails, logout } from "../services/operations";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const currURL = location.pathname;

    const getUser = async () => {
        const response = await getUserDetails(token);
        console.log(response);
        setUser(response?.data);
    }
    const logoutHandler = async () => {
        await logout(navigate);
    }
    useEffect(() => {
        getUser();
    }, [currURL]);

	return (
        <div>
            {
                token && (
                    <div>
                        <p>{user?.name}</p>
                        <p>{user?.account?.balance}</p>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;