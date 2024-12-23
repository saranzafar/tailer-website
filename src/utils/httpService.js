import axios from "axios";
import toast from "react-hot-toast";
import { setAuthCookies } from "./cookies";

// Base URL for API requests
const baseURL = "http://127.0.0.1:8000/api/";

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
        // Make the API request
        const response = await axios({
            method,
            url: baseURL + api,
            data: method === "get" || method === "delete" ? null : data, // Include data for POST/PUT
            params: method === "get" || method === "delete" ? data : null, // Include params for GET/DELETE
        });
        console.log("Response:", response);

        // Show success notification if enabled
        if (showNotification) {
            showToast("success", response.data.message || "Request completed successfully!");
        }

        if (response.data?.access) setAuthCookies(response.data, 7)

        return response.data;
    } catch (error) {
        console.log("Error:", error);

        let errorMessages = [];

        // Check if the server returned an error response with a data object
        if (error.response?.data && typeof error.response.data === "object") {
            const errorData = error.response.data;

            if (errorData.detail) {
                errorMessages.push(errorData.detail);
            }
            // Loop through the object to extract error messages
            for (const [key, value] of Object.entries(errorData)) {
                if (Array.isArray(value) && value.length > 0) {
                    // Push the first error message of each array to the errorMessages array
                    errorMessages.push(value[0]);
                }
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
        throw error;
    }

};

export default httpServer;
