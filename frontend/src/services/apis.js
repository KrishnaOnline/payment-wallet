const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const endPoints = {
    SIGNUP_API: BASE_URL+"/user/signup",
    LOGIN_API: BASE_URL+"/user/login",
    SEARCH_USERS_API: BASE_URL+"/user/search-results",
    BALANCE_API: BASE_URL+"/user/balance",
    TRANSFER_API: BASE_URL+"/account/transfer",
}