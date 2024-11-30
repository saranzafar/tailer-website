import { Link } from "react-router-dom";
import { Facebook, Twitter, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-auto bg-primary w-full">
            <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="col-span-full lg:col-span-2">
                        <Link
                            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                            to="#"
                            aria-label="Brand"
                        >
                            <img src="./img/logo.jpeg" alt="stitch4u" className="w-24" />
                        </Link>
                        <p className="text-white mt-4">
                            Stitch4U is a cutting-edge platform that empowers users to create personalized solutions with ease. We specialize in seamless integration, security, and user-centric design to bring your ideas to life.
                        </p>
                        {/* Social Brands */}
                        <div className="">
                            <Link
                                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                                to="#"
                            >
                                <Facebook className="shrink-0 size-4" />
                            </Link>
                            <Link
                                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                                to="#"
                            >
                                <Twitter className="shrink-0 size-4" />
                            </Link>
                            <Link
                                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                                to="#"
                            >
                                <Github className="shrink-0 size-4" />
                            </Link>
                            <Link
                                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                                to="#"
                            >
                                <Linkedin className="shrink-0 size-4" />
                            </Link>
                            <Link
                                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                                to="#"
                            >
                                <Instagram className="shrink-0 size-4" />
                            </Link>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Product</h4>
                        <div className="mt-3 grid space-y-3">
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/pricing"
                                >
                                    Pricing
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/changelog"
                                >
                                    Changelog
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/docs"
                                >
                                    Docs
                                </Link>
                            </p>
                        </div>
                    </div>
                    {/* End Col */}

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Company</h4>
                        <div className="mt-3 grid space-y-3">
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/about"
                                >
                                    About us
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/careers"
                                >
                                    Careers
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    to="/customers"
                                >
                                    Customers
                                </Link>
                            </p>
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}

                <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-center sm:items-center">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © 2024 Stitch4U. All rights reserved.
                        </p>
                    </div>
                    {/* End Col */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
