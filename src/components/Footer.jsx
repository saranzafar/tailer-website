import { IconButton, Typography } from "@material-tailwind/react";
import { Facebook, Instagram, Phone, Ticket } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between text-white">
                    <div>
                        <img src="./img/logo.jpeg" alt="stitch4u" className="w-20" />
                        {/* <div className="flex gap-4">
                            <IconButton variant="outlined" size="sm" color="white" className="rounded-full">
                                <Instagram />
                            </IconButton>
                            <IconButton variant="outlined" size="sm" color="white" className="rounded-full">
                                <Phone />
                            </IconButton>
                            <IconButton variant="outlined" size="sm" color="white" className="rounded-full">
                                <Facebook />
                            </IconButton>
                        </div> */}

                    </div>

                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="font-normal transition-colors hover:text-logoBrown focus:text-logoBrown"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="font-normal transition-colors hover:text-logoBrown focus:text-logoBrown"
                            >
                                License
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="font-normal transition-colors hover:text-logoBrown focus:text-logoBrown"
                            >
                                Contribute
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="font-normal transition-colors hover:text-logoBrown focus:text-logoBrown"
                            >
                                Contact Us
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <Typography color="white" className="text-center font-normal">
                    &copy; 2024 Stitch4U | All Rights Reserved.
                </Typography>
            </div>

        </footer>
    );
};

export default Footer;
