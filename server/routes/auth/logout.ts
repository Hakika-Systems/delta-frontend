import axios from "axios";
import { SHOP_URL } from "~/services/global.variables";
import { getCookie, deleteCookie, setCookie } from "h3";

let token: any;
let refresh_token: any;

export default defineEventHandler(async (event) => {
    const response: any = {};

    try {
        // Get the cookies (tokens) from the event request
        token = getCookie(event, "token");
        refresh_token = getCookie(event, "refresh_token");

        // Call the logout function with the tokens
        await logout();

        // If logout was successful, delete all cookies
        deleteAllCookies(event);

        response.success = true;
        response.message = "Logged out successfully.";
        console.log("Logout successful:", response);
    } catch (error: any) {
        console.error("Logout error:", error);

        // If the error is related to token expiration, attempt to refresh the token
        if (error.message === "TokenExpiredError") {
            try {
                console.log("Attempting to refresh token...");
                // Refresh the token using the refresh token
                const newToken = await refreshToken();

                // Update the token
                token = newToken.access_token;

                // Retry the logout with the new token
                await logout();

                // Delete all cookies if logout is successful after refresh
                deleteAllCookies(event);

                response.success = true;
                response.message = "Logged out successfully after refreshing the token.";
                console.log("Logout successful after refresh:", response);
            } catch (refreshError: any) {
                console.error("Token refresh error:", refreshError);
                // If refreshing the token fails, forcibly delete cookies
                deleteAllCookies(event);
                response.success = true;
                response.message = "Logout completed with token refresh failure. Cookies have been cleared.";
                console.log("Forced logout after failed refresh:", response);
            }
        } else {
            // If it's another type of error, forcibly delete cookies
            deleteAllCookies(event);
            response.success = true;
            response.message = "Logout completed despite errors. Cookies have been cleared.";
            console.log("Forced logout after other errors:", response);
        }
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
        "token": token?.replace(/^"|"$/g, ''),
        "refresh_token": refresh_token?.replace(/^"|"$/g, ''),
    };

    try {
        const response = await axios.post(url, body, { headers });
        console.log("Logout API response:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Logout API error:", error.response?.data || error.message);
        // If the error is due to an expired token, throw a specific error
        if (error.response?.status === 401 && error.response?.data?.error === "TokenExpiredError") {
            throw new Error("TokenExpiredError");
        }
        throw new Error("Server Error. Please try again later.");
    }
};

export const refreshToken = async () => {
    const url = `${SHOP_URL}/api/refresh`;
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    const body = {
        "refresh_token": refresh_token?.replace(/^"|"$/g, ''),
    };

    try {
        const response = await axios.post(url, body, { headers });
        console.log("Refresh token API response:", response.data);

        // Optionally, update the token in cookies if needed
        //@ts-ignore
        setCookie(event, "token", JSON.stringify(response.data.token));

        return response.data; // Should include the new access token
    } catch (error: any) {
        console.error("Refresh token API error:", error.response?.data || error.message);
        throw new Error("Failed to refresh the token.");
    }
};

// Helper function to delete cookies after failed logout or refresh
const deleteAllCookies = (event: any) => {
    deleteCookie(event, "token");
    deleteCookie(event, "refresh_token");
    deleteCookie(event, "user_id");
    deleteCookie(event, "username");
    console.log("All cookies have been forcibly deleted.");
};
