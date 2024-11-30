import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

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
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53448.20783131414!2d73.70062245755294!3d33.148156882764255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391feb8b4d030e19%3A0x4ec2b8053d7b1051!2sNew%20Mirpur%20City!5e0!3m2!1sen!2s!4v1732989612717!5m2!1sen!2s"
                        width="600"
                        height="580"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded shadow-lg"
                    ></iframe>
                    <form
                        action="#"
                        className="flex flex-col gap-4 lg:max-w-sm"
                    >
                        <Typography
                            variant="small"
                            className="text-left !font-semibold !text-gray-600"
                        >
                            Get in Touch with Us
                        </Typography>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    First Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="First Name"
                                    name="first-name"
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Last Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Last Name"
                                    name="last-name"
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Location
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="Enter your city or postal code"
                                name="location"
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Message
                            </Typography>
                            <Textarea
                                rows={6}
                                color="gray"
                                placeholder="Message"
                                name="message"
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-logoBrown">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
