import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UseVerification } from "../utils/VerificationContext";
import { Avatar, Button } from "@material-tailwind/react";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { isLoggedIn, logout } = UseVerification();
    const navigate = useNavigate();

    const handleNavClick = () => {
        if (window.innerWidth <= 1024) { // Only close dropdown on mobile
            setOpen(false);
        }
    };

    return (
        <header className="flex w-full items-center bg-white mx-auto justify-center sticky top-0 z-50 drop-shadow-lg">
            <div className="container">
                <div className="relative flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-60 max-w-full px-4">
                        <NavLink to="/" className="block w-full py-5">
                            <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                                alt="logo"
                                className="dark:hidden"
                            />
                            <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                                alt="logo"
                                className="hidden"
                            />
                        </NavLink>
                    </div>

                    {/* Navbar Toggle and Links */}
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            {/* Hamburger Menu */}
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={`${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-button focus:ring-2 lg:hidden`}
                            >
                                <Menu className={open ? "text-button" : ""} />
                            </button>

                            {/* Navbar Links */}
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    }`}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/" onClick={handleNavClick}>Home</ListItem>
                                    <ListItem NavLink="/shops" onClick={handleNavClick}>Shops</ListItem>
                                    <ListItem NavLink="/pricing-plans" onClick={handleNavClick}>Pricing</ListItem>
                                    <ListItem NavLink="/contactus" onClick={handleNavClick}>Contact us</ListItem>
                                    {isLoggedIn ? (
                                        <div className="flex sm:hidden flex-col">
                                            <ListItem NavLink="/profile" onClick={handleNavClick}>Profile</ListItem>
                                            <Link onClick={() => {
                                                logout()
                                                handleNavClick();
                                            }} className="text-red-600 font-semibold">Logout</Link>
                                        </div>
                                    ) : (
                                        <div className="flex sm:hidden">
                                            <ListItem NavLink="/login" className="text-button font-semibold" onClick={handleNavClick}>Login</ListItem>
                                        </div>
                                    )}
                                </ul>
                            </nav>
                        </div>

                        {/* Buttons: Log In / Log Out */}
                        <div className="justify-end pr-16 sm:flex lg:pr-0 gap-2">
                            {isLoggedIn ? (
                                <div className="hidden md:block space-x-2">
                                    <Button onClick={() => logout()} variant="text" size="md" color="red">Logout</Button>
                                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" onClick={() => navigate("/profile")} className="cursor-pointer" />
                                </div>
                            ) : (
                                <div className="hidden md:block">
                                    <NavLink
                                        to="/signup"
                                        className="px-5 py-2 text text-button rounded-lg hover:text-button-hover font-semibold"
                                    >
                                        Sign Up
                                    </NavLink>
                                    <NavLink
                                        to="/login"
                                        className="px-5 py-2 text text-white rounded-lg shadow-md bg-button hover:bg-button-hover font-semibold"
                                    >
                                        Log In
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;

// Reusable List Item Component
const ListItem = ({ children, NavLink: to, onClick }) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `flex py-2 text-base font-medium hover:text-button ${isActive ? "text-button-hover" : "text-body-color"
                    } hover:text-dark lg:ml-12 lg:inline-flex`
                }
                onClick={onClick}
            >
                {children}
            </NavLink>
        </li>
    );
};
