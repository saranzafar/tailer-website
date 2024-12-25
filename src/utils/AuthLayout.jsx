import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuthCookies } from "./cookies";

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();


    const securePaths = ["/profile"];
    const authPaths = [
        "/login",
        "/register",
        "/forgot-password",
        "/verification",
        "/signup",
        "/tailor/register/basic",
        "/tailor/register/standard",
        "/tailor/register/premium"
    ];

    useEffect(() => {
        const { access } = getAuthCookies();
        const currentPath = location.pathname;

        // if (access && authPaths.includes(currentPath)) {
        //     // If user is logged in and tries to access an auth page, redirect to home
        //     navigate("/");
        // } else if (!access && securePaths.includes(currentPath)) {
        //     // If user is not logged in and tries to access a secure page, redirect to login
        //     navigate("/login");
        // }
        //else if (access && securePaths.includes(currentPath)) {
        // Additional logic for secure paths: Check role or permissions
        //     if (role === "customer" && currentPath === "/admin") {
        //         // Example: Redirect customers trying to access admin pages
        //         navigate("/not-authorized");
        //     }
        // }
    }, [location, navigate]);

    return <>{children}</>; // Render children (wrapped components)
};

export default AuthLayout;
