import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { endPoints } from "./apis";

export const signUp = async (data, navigate) => {
    try {
        const response = await apiConnector("POST", endPoints.SIGNUP_API, data);
        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("User Registered");
        navigate("/dashboard");
    } catch(err) {
        console.log(err);
        toast.error(err?.response.data.message);
        navigate("/signup");
    }
}