import { createContext, useContext, useState } from "react";
import { deleteAuthCookies, getAuthCookies } from "./cookies";

// Create the context
const VerificationContext = createContext();

// Custom hook for accessing the context
export const UseVerification = () => {
    return useContext(VerificationContext);
};

// Provider component
export const VerificationProvider = ({ children }) => {
    const [contextEmail, setContextEmail] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!getAuthCookies().access);
    console.log("ContextEmail: ", contextEmail);

    const login = () => setIsLoggedIn(true);
    const logout = () => {
        deleteAuthCookies();
        setIsLoggedIn(false);
    };

    return (
        <VerificationContext.Provider value={{ contextEmail, setContextEmail, isLoggedIn, login, logout }}>
            {children}
        </VerificationContext.Provider>
    );
};
