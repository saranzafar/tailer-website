import { createContext, useContext, useState, useEffect } from "react";
import { deleteAuthCookies, getAuthCookies, setCookie, getCookie, deleteCookie } from "./cookies";
import { useNavigate } from "react-router-dom";
// Create the context
const VerificationContext = createContext();

// Custom hook for accessing the context
export const UseVerification = () => {
    return useContext(VerificationContext);
};

// Utility functions for handling email/phone in cookies
const COOKIE_NAME_EMAIL = "verificationEmail";
const COOKIE_NAME_PHONE = "verificationPhone";

const saveToCookies = (key, value, days = 7) => {
    if (value) {
        setCookie(key, value, days);
    }
};

const getFromCookies = (key) => {
    return getCookie(key);
};

const getUserDataFromCookies = () => {
    return getAuthCookies()
}

const clearFromCookies = (key) => {
    deleteCookie(key);
};

// Provider component
export const VerificationProvider = ({ children }) => {
    const [contextEmail, setContextEmail] = useState(() => getFromCookies(COOKIE_NAME_EMAIL));
    const [contextPhoneNumber, setContextPhoneNumber] = useState(() => getFromCookies(COOKIE_NAME_PHONE));
    const [userData, setUserData] = useState(() => getUserDataFromCookies())
    const [isLoggedIn, setIsLoggedIn] = useState(!!getAuthCookies().access);
    const navigate = useNavigate();

    useEffect(() => {
        saveToCookies(COOKIE_NAME_EMAIL, contextEmail);
    }, [contextEmail]);

    useEffect(() => {
        saveToCookies(COOKIE_NAME_PHONE, contextPhoneNumber);
    }, [contextPhoneNumber]);

    const login = () => setIsLoggedIn(true);

    const logout = () => {
        deleteAuthCookies();
        setIsLoggedIn(false);
        clearFromCookies(COOKIE_NAME_EMAIL);
        clearFromCookies(COOKIE_NAME_PHONE);
        navigate("/login")

    };

    return (
        <VerificationContext.Provider
            value={{
                contextEmail,
                setContextEmail,
                contextPhoneNumber,
                setContextPhoneNumber,
                isLoggedIn,
                login,
                logout,
                userData,
                setUserData,
            }}
        >
            {children}
        </VerificationContext.Provider>
    );
};
