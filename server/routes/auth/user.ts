import axios from "axios";
import { SHOP_URL } from "~/services/global.variables";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);
    const response:any = {};

    try {
        const data = await login({ email, password });
        setCookie(event, "token", JSON.stringify(data?.data?.token));
        setCookie(event, "refresh_token", JSON.stringify(data?.data?.refresh_token));
        setCookie(event, "user_id", JSON.stringify(data?.data?.user.id));
        setCookie(event, "username", JSON.stringify(data?.data?.user.name));
        response['login'] = data;
        response['success'] = true;
    } catch (error:any) {
        response['success'] = false;
        response['message'] = error.response?.data?.message || error.message || "An unexpected error occurred.";
    }

    return response;
});

export const login = async (data:any) => {
    const url = `${SHOP_URL}/api/auth/login`;
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    const body = {
        "email": data?.email,
        "password": data?.password
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error:any) {
        if (error.response) {
            // Server responded with a status code out of 2xx range
            throw new Error(error.response.data?.message || "Server Error. Please try again later.");
        } else if (error.request) {
            // Request was made but no response was received
            throw new Error("Network Error. Please check your internet connection.");
        } else {
            // Something else caused the error
            throw new Error(error.message || "Request Error. Please try again.");
        }
    }
};
