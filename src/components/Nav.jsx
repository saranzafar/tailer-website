import { Menu } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex w-full items-center bg-white mx-auto justify-center sticky top-0 z-50 drop-shadow-lg">
            <div className="container">
                <div className="relative flex items-center justify-between">
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
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-button focus:ring-2 lg:hidden`}
                            >
                                <Menu className={open ? "text-button" : ""} />
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    }`}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/">Home</ListItem>
                                    <ListItem NavLink="/landingpage">Landing Page</ListItem>
                                    <ListItem NavLink="/contactus">Contact us</ListItem>
                                    <ListItem NavLink="/profile">Profile</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <NavLink
                                to="/signup"
                                className="px-7 py-3 text text-button rounded-lg hover:text-button-hover font-semibold"
                            >
                                Signup
                            </NavLink>
                            <NavLink
                                to="/login"
                                className="px-7 py-3 text text-white rounded-lg shadow-md bg-button hover:bg-button-hover font-semibold "
                            >
                                Log In
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;

const ListItem = ({ children, NavLink: to }) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `flex py-2 text-base font-medium hover:text-button ${isActive ? "text-button-hover" : "text-body-color"
                    } hover:text-dark lg:ml-12 lg:inline-flex`
                }
            >
                {children}
            </NavLink>
        </li>
    );
};
