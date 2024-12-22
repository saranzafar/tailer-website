import React, { createContext, useContext, useEffect, useState } from "react";
import { use } from "react";

// Create the context
const VerificationContext = createContext();

// Custom hook for accessing the context
export const UseVerification = () => {
    return useContext(VerificationContext);
};

// Provider component
export const VerificationProvider = ({ children }) => {
    const [contextEmail, setContextEmail] = useState(null);
    useEffect(() => {
        console.log("This is the email", contextEmail);
    }, [contextEmail]);

    return (
        <VerificationContext.Provider value={{ contextEmail, setContextEmail }}>
            {children}
        </VerificationContext.Provider>
    );
};
