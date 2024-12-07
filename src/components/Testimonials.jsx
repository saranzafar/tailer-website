
function Testimonials() {
    const testimonialsData = [
        {
            quote: "With Stitch4U, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
            name: "Josh Tyson",
            role: "Product Manager | Capsule",
            avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
        {
            quote: "In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
            name: "Luisa",
            role: "Senior Director of Operations | Fitbit",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
        {
            quote: "Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color.",
            name: "Alisa Williams",
            role: "Entrepreneur | Happy customer",
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
        },
    ];

    return (
        <div className="">
            <div className="relative max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Title */}
                <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16 mx-auto">
                    <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center my-10">
                        What Our Users Say
                    </h2>
                    <p className="mt-3 text-lg text-gray-800 max-w-[50rem] text-center mx-auto mb-10">
                        Discover how Stitch4U has transformed the tailoring experience for customers and businesses alike. Hear directly from our users about their journeys and successes with our platform.
                    </p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="flex h-auto hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                            <div className="flex flex-col bg-gray-50 hover:bg-blue-gray-50 rounded-xl">
                                <div className="flex-auto p-4 md:p-6">
                                    <p className="text-base italic md:text-lg text-gray-800">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                </div>

                                <div className="p-4 bg-primary rounded-b-xl md:px-7">
                                    <div className="flex items-center gap-x-3">
                                        <div className="shrink-0">
                                            <img
                                                className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                                                src={testimonial.avatar}
                                                alt="Avatar"
                                            />
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm sm:text-base font-semibold text-white">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-xs text-gray-100">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Grid */}
            </div>
        </div>
    )
}

export default Testimonials