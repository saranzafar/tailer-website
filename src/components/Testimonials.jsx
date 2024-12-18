import React from "react";
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { Star } from "lucide-react";

function Testimonials() {
    const testimonialsData = [
        {
            quote: "With Stitch4U, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
            name: "Josh Tyson",
            role: "Product Manager | Capsule",
            avatar:
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
            rating: 5,
        },
        {
            quote: "In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
            name: "Luisa",
            role: "Senior Director of Operations | Fitbit",
            avatar:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
            rating: 4,
        },
        {
            quote: "Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color.",
            name: "Alisa Williams",
            role: "Entrepreneur | Happy customer",
            avatar:
                "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            rating: 5,
        },
    ];

    return (
        <div className="py-10 px-6 max-w-[85rem] mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold">What Our Users Say</h2>
                <p className="mt-3 text-lg text-gray-800">
                    Discover how our platform has transformed the experience for customers
                    and businesses alike.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {testimonialsData.map((testimonial, index) => (
                    <Card
                        key={index}
                        color="white"
                        className="w-full max-w-[26rem] p-6 hover:translate-y-[-5px] hover:drop-shadow-lg transition-transform duration-300"
                    >
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src={testimonial.avatar}
                                alt={testimonial.name}
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        {testimonial.name}
                                    </Typography>
                                    <div className="flex items-center gap-0">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star
                                                key={idx}
                                                className={`h-5 w-5 ${idx < testimonial.rating
                                                        ? "text-yellow-700"
                                                        : "text-gray-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <Typography color="blue-gray" variant="paragraph">{testimonial.role}</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="mb-6 p-0">
                            <Typography variant="h6" color="blue-gray">&quot;{testimonial.quote}&quot;</Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
