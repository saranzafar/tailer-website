// Save authentication data (tokens and user info) to cookies
export const setAuthCookies = (data, days = 7) => {
    const { access, refresh, role, username, email, phone, id, verificationChecker = "login" } = data;

    // Set individual cookies for each field
    if (access) setCookie("access", access, days);
    if (refresh) setCookie("refresh", refresh, days);
    if (role) setCookie("role", role, days);
    if (username) setCookie("username", username, days);
    if (email) setCookie("email", email, days);
    if (phone) setCookie("phone", phone, days);
    if (id) setCookie("id", id, days);
    if (verificationChecker) setCookie("verificationChecker", verificationChecker, days);
};

// Retrieve authentication data from cookies
export const getAuthCookies = () => {
    return {
        access: getCookie("access"),
        refresh: getCookie("refresh"),
        role: getCookie("role"),
        username: getCookie("username"),
        email: getCookie("email"),
        phone: getCookie("phone"),
        id: getCookie("id"),
        verificationChecker: getCookie("verificationChecker"),
    };
};

// Update a specific field in the cookies
export const updateAuthCookie = (key, value, days = 7) => {
    setCookie(key, value, days); // Simply call setCookie to overwrite the cookie
};

// Delete all authentication cookies
export const deleteAuthCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
        const cookieName = cookie.split("=")[0];
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
};

// Utility functions for basic cookie operations
export const setCookie = (key, value, days = 7) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const cookieValue = typeof value === "object" ? JSON.stringify(value) : value;
    document.cookie = `${key}=${encodeURIComponent(cookieValue)}; ${expires}; path=/`;
};

export const getCookie = (key) => {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split("; ");
    for (const cookie of cookieArray) {
        if (cookie.startsWith(name)) {
            const value = cookie.substring(name.length);
            try {
                return JSON.parse(value); // Attempt to parse as JSON
            } catch {
                return value; // Return as a string if parsing fails
            }
        }
    }
    return null; // Return null if the cookie doesn't exist
};

export const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
