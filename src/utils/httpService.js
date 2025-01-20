import axios from "axios";
import toast from "react-hot-toast";
import { setAuthCookies, getAuthCookies } from "./cookies";

// Base URL for API requests
// const baseURL = "http://193.160.119.12/api/";
const baseURL = "https://stitch.ifraheem.com/api/";

// Reusable Toast Notification Function
const showToast = (type, message) => {
    if (type === "success") {
        toast.success(message);
    } else if (type === "error") {
        toast.error(message);
    }
};

// HTTP Utility Function
const httpServer = async (method = "get", api, data = {}, showNotification = true) => {
    try {
        // Fetch access token from cookies (or wherever you're storing it)
        const authCookies = getAuthCookies(); // Expected to return an object { access: "ACCESS_TOKEN", refresh: "REFRESH_TOKEN" }
        const accessToken = authCookies?.access || null;

        const config = {
            method,
            url: baseURL + api,
            headers: accessToken
                ? {
                    Authorization: `Bearer ${accessToken}`, // Add Authorization header if access token is available
                }
                : {},
            data: method === "get" || method === "delete" ? null : data, // Include data for POST/PUT
            params: method === "get" || method === "delete" ? data : null, // Include params for GET/DELETE
        };

        // Make the API request
        const response = await axios(config);

        // Show success notification if enabled
        if (showNotification) {
            showToast("success", response?.data?.message || response?.data?.detail || "Request completed successfully!");
        }

        // Handle token refresh if new tokens are provided in response
        if (response.data?.access) {
            setAuthCookies(response.data, 7); // Update cookies with new tokens
        }

        return response.data;
    } catch (error) {
        let errorMessages = [];

        if (error.response?.data?.message) {
            errorMessages.push(error.response.data.message);
        } else if (error.message) {
            errorMessages.push(error.message);
        } else {
            errorMessages.push("An unknown error occurred. Please try again.");
        }

        // Display the error message
        showToast("error", errorMessages[0]);

        // Rethrow the error for further handling if necessary
        throw error;
    }
};

export default httpServer;
