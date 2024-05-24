import { useState } from "react";
import { signUp } from "../services/operations";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log(user);
        await signUp(user, navigate);
    }

	return (
        <div>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Enter Full Name"
                        name="name"
                        id="name"
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder="Enter Unique Username"
                        name="username"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile No.</label>
                    <input
                        placeholder="Enter Mobile Number"
                        name="mobile"
                        id="mobile"
                        type="tel"
                        value={user.mobileNo}
                        onChange={(e) => setUser({...user, mobileNo: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Enter your Email"
                        name="email"
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Enter Full Name"
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
                SignUp
            </button>
        </div>
    );
}

export default Signup;