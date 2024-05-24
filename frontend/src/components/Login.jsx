import { useState } from "react";
import { login } from "../services/operations";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log(user);
        setLoading(true);
        const response = await login(user, navigate);
        console.log(response?.data?.token);
        setLoading(false);
    }

	return (
        <div>
            <div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder="Enter your Username"
                        name="username"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
            </div>
            <button
                onClick={handleSubmit}
            >
                {
                    loading ? <p>Logging In...</p> : <p>Login</p>
                }
            </button>
        </div>
    );
}

export default Login;