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

        // Check if the server returned an error response with a data object
        if (error.response?.data && typeof error.response.data === "object") {
            const errorData = error.response.data;
            console.log("Error data: ", errorData);

            if (errorData.detail) {
                errorMessages.push(errorData.detail);
            } else if (errorData.error) {
                errorMessages.push(errorData.error);
            }
        } else if (error.message) {
            // Handle generic Axios or network-related errors
            errorMessages.push(error.message);
        } else {
            // Fallback message
            errorMessages.push("An unknown error occurred. Please try again.");
        }

        // Show each error message as a separate toast
        errorMessages.forEach((message) => {
            toast.error(message);
        });

        console.error("Error Messages:", errorMessages);

        // Rethrow the error for further handling if necessary
        showToast("error", errorMessages[0]);
        throw error;
    }
};

export default httpServer;
