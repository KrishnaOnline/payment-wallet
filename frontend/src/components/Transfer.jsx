import { useNavigate, useParams } from "react-router-dom";
import { transferMoney } from "../services/operations";
import { useState } from "react";

function Transfer() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const {receiverID} = useParams();
    const navigate = useNavigate();
    console.log(user);
    const [data, setData] = useState({});
    setData(...data, {to: receiverID});

    const handleTransfer = async () => {
        await transferMoney(data, token, navigate);
    }
    
	return (
        <div>
            <p>Me: {user?._id}</p>
            <p>Rec: {receiverID}</p>
            <div>
                <input
                    placeholder="Enter Amount"
                    onClick={handleTransfer}
                    // value={data.amount}
                    onChange={(e) => setData(...data, {amount: e.target.value})}
                />
                <button onClick={handleTransfer}>Transfer</button>
            </div>
        </div>
    );
}

export default Transfer;
