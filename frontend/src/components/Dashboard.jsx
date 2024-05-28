import { useEffect, useState } from "react";
import { getSearchUsers } from "../services/operations";
import { Link } from "react-router-dom";

function Dashboard() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
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
                    users?.map((u, index) => {
                        return u._id!==user._id && (
                            <div key={index}>
                                <Link to={`/transfer/${u._id}`}>
                                    <div>
                                        {u?.name}
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Dashboard;
