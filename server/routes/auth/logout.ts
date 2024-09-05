import axios from "axios";
import { SHOP_URL } from "~/services/global.variables";
import { getCookie, deleteCookie } from "h3";
let token:any
let refresh_token:any
export default defineEventHandler(async (event) => {
    const response: any = {};
  
    try {
        // Get the cookies (tokens) from the event request
        token = getCookie(event, "token");
        refresh_token = getCookie(event, "refresh_token");
        
        console.log("Token from cookie:", token);
        console.log("Refresh token from cookie:", refresh_token);

        // Call the logout function with the tokens
        await logout();

        // Delete all the cookies set during login
        deleteCookie(event, "token");
        deleteCookie(event, "refresh_token");
        deleteCookie(event, "user_id");
        deleteCookie(event, "username");

        response['success'] = true;
        response['message'] = "Logged out successfully.";
    } catch (error: any) {
        console.error("Logout error:", error); // Log error details
        response['success'] = false;
        response['message'] = error.toString();
    }

    return response;
});

export const logout = async () => {
    const url = `${SHOP_URL}/api/logout`;
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    const body = {
        "token": token.replace(/^"|"$/g, ''),
        "refresh_token": refresh_token.replace(/^"|"$/g, ''),
    };
    console.log('my body', body);
    try {
        const response = await axios.post(url, body, { headers });
        console.log("Logout Response Data:", response.data);
        return response.data;
    } catch (error: any) {
        // Handle specific errors orn rethrow for generic handling
        console.log("Server Error:", error.response.data);
        throw new Error("Server Error. Please try again later.");
    }
};
