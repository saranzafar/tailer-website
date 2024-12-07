import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Divider } from "../components"

export function ContactUs() {
    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="container mx-auto text-center">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 !text-base lg:!text-2xl"
                >
                    Customer Support
                </Typography>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl"
                >
                    Find Your Perfect Fit
                </Typography>
                <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                    Have questions about finding the best tailor near you? Want to provide feedback about your experience or need help using our service? Our team is here to assist you with all your tailoring needs.
                </Typography>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53448.20783131414!2d73.70062245755294!3d33.148156882764255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391feb8b4d030e19%3A0x4ec2b8053d7b1051!2sNew%20Mirpur%20City!5e0!3m2!1sen!2s!4v1732989612717!5m2!1sen!2s"
                        width="100%"
                        height="480"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded shadow-lg"
                    ></iframe>

                    <form
                        action="#"
                        className="flex flex-col gap-4 lg:max-w-lg bg-gray-50 p-6 drop-shadow-lg rounded-lg"
                    >
                        <Typography
                            variant="h2"
                            className="text-center"
                        >
                            Get in Touch with Us
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input
                                    label="First Name"
                                    type="text"
                                    id="first-name"
                                    required
                                    className="text-sm"
                                />
                            </div>
                            <div>
                                <Input
                                    label="Last Name"
                                    type="text"
                                    id="last-name"
                                    required
                                    className="text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <Input
                                label="Your Email"
                                type="email"
                                id="email"
                                placeholder="name@email.com"
                                required
                                className="text-sm"
                            />
                        </div>
                        <div>
                            <Input
                                label="Your Location"
                                type="text"
                                id="location"
                                placeholder="Enter your city or postal code"
                                required
                                className="text-sm"
                            />
                        </div>
                        <div>
                            <Textarea
                                label="Your Message"
                                rows={6}
                                id="message"
                                required
                                className="text-sm"
                            />
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-logoBrown">
                            Send Message
                        </Button>
                    </form>
                </div>
                <Divider />
            </div>
        </section>
    );
}

export default ContactUs;
