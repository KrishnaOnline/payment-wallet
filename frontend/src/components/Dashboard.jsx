import { useEffect, useState } from "react";
import { getSearchUsers } from "../services/operations";
import { Link } from "react-router-dom";

function Dashboard() {
    const token = localStorage.getItem("token");
    console.log("Token from Dahsboard:", token);
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState(null);
    const handleSearch = async (token) => {
        const response = await getSearchUsers(token, !query ? "" : query);
        console.log("Search Users Response: ", response?.data);
        setUsers(response?.data);
    }
    useEffect(() => {
        handleSearch(token);
    }, []);

	return (
        <div>
            <div>
                <input
                    placeholder="Search Users"
                    id="users"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {
                    users?.map((user, index) => (
                        <div key={index}>
                            <Link to={`/transfer/${user._id}`}>
                                <div>
                                    {user?.name}
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Dashboard;
