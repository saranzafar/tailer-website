import React, { useState } from "react";
import { ChevronDown, ChevronRight, List, LogIn, Menu, User } from "lucide-react"; // Import lucide-react icons

import { Link } from "react-router-dom";

const Navbar = () => {
    // State to manage the visibility of the menu on small screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-4 inset-x-0 z-50 w-full">
            <nav className="relative mx-auto max-w-[66rem] w-full backdrop-blur-md bg-white/60 border border-gray-200 dark:border-neutral-700 rounded-[26px] py-2 px-5 flex flex-wrap md:justify-start md:flex-nowrap">
                {/* Logo w/ Collapse Button */}
                <div className="flex items-center justify-between w-full">
                    <Link className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white font-inter" to="/" aria-label="Brand">
                        <img src="./img/logo.jpeg" alt="" className="h-10 w-10 rounded-full" />
                    </Link>

                    {/* Collapse Button */}
                    <div className="md:hidden">
                        <Menu
                            type="button"
                            className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            aria-controls="hs-header-classic"
                            aria-label="Toggle navigation"
                        >
                            <span className="sr-only">Toggle navigation</span>
                        </Menu>
                    </div>
                </div>

                {/* Collapse */}
                <div
                    id="hs-header-classic"
                    className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}
                    aria-labelledby="hs-header-classic-collapse"
                >
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                            <Link
                                to="/"
                                className="p-2 flex items-center text-sm text-primary hover:text-logoBrown hover:underline font-medium focus:outline-none focus:text-logoBrown font-inter" aria-current="page">
                                Home
                            </Link>

                            <Link
                                to="/services"
                                className="p-2 flex items-center text-sm text-primary hover:text-logoBrown hover:underline font-medium focus:outline-none focus:text-logoBrown dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500 font-inter">
                                Services
                            </Link>

                            <Link
                                to="/about"
                                className="p-2 flex items-center text-sm text-primary hover:text-logoBrown hover:underline font-medium focus:outline-none focus:text-logoBrown dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500 font-inter">
                                About
                            </Link>

                            {/* Log In Button */}
                            <div className="relative flex items-center gap-x-1.5 md:ps-2.5 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2 dark:before:bg-neutral-700">
                                <Link
                                    to="/profile"
                                    className="border rounded-full border-gray-900 hover:text-logoBrown hover:underline hover:border-logoBrown">
                                    <User />
                                </Link>
                                <Link
                                    to="/login"
                                    className="p-2 w-full flex items-center text-sm text-primary hover:text-logoBrown focus:outline-none focus:text-logoBrown dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500 font-inter">
                                    <LogIn className="shrink-0 size-4 me-3 md:me-2" />
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
