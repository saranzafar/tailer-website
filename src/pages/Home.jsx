import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle, ChevronDown, ChevronUp, Star, StarHalf } from 'lucide-react';
import { Button } from '@material-tailwind/react';

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Can I cancel at anytime?",
            answer:
                "Yes, you can cancel anytime no questions are asked while you cancel, but we would highly appreciate it if you give us feedback.",
        },
        {
            question: "My team has credits. How do we use them?",
            answer:
                "Once your team signs up for a subscription plan, you can easily use your credits to collaborate and manage tasks effectively.",
        },
        {
            question: "How does pricing work?",
            answer:
                "Our subscriptions are tiered, providing flexibility based on your project size and requirements.",
        },
        {
            question: "How secure is the platform?",
            answer:
                "Protecting the data you trust to our platform is our first priority. We use state-of-the-art security measures.",
        },
        {
            question: "How do I get access to a theme I purchased?",
            answer:
                "Log in to your account, go to 'Purchases,' and you can easily redownload the theme using your email.",
        },
        {
            question: "Upgrade License Type",
            answer:
                "You can upgrade your license by applying your original purchase cost to the new license purchase.",
        },
    ];
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
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="block text-3xl font-bold text-blue-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
                            Start your style journey with <span className="text-primary">Stitch4U</span>
                        </h1>
                        <p className="mt-3 text-lg text-gray-800">
                            Expert tailoring and custom clothing services tailored just for you. Redefine your wardrobe with
                            Stitch4U&apos;s precision and creativity.
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <Link
                                to="#"
                                className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-logoBrown focus:outline-none focus:bg-logoBrown disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Get Started
                                <ArrowRight className="shrink-0 size-4" />
                            </Link>
                            <Link
                                to="/contactus"
                                className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                        {/* End Buttons */}

                        {/* Review */}
                        <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                            {/* Review */}
                            <div className="py-5">
                                <div className="flex gap-x-1">
                                    {/* Icons */}
                                    <Star fill="orange" strokeWidth={0} />
                                    <Star fill="orange" strokeWidth={0} />
                                    <Star fill="orange" strokeWidth={0} />
                                    <Star fill="orange" strokeWidth={0} />
                                    <StarHalf fill="orange" strokeWidth={0} />
                                </div>

                                <p className="mt-3 text-sm text-gray-800">
                                    <span className="font-bold">4.8</span> /5 - from 1.2k satisfied customers
                                </p>
                            </div>
                        </div>
                        {/* End Review */}
                    </div>
                    <img
                        src="https://cdn.pixabay.com/photo/2020/06/14/03/08/tailor-5296384_960_720.jpg"
                        alt="Tailor working on clothes"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* stats  */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-50 shadow-lg rounded-lg my-10">
                {/* Grid */}
                <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                    <div className="lg:col-span-4">
                        {/* Stats */}
                        <div className="lg:pe-6 xl:pe-12">
                            <p className="text-6xl font-bold leading-10 text-primary">
                                92%
                                <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
                                    <CheckCircle className="shrink-0 size-4 text-darkPrimary" />
                                    +7% this month
                                </span>
                            </p>
                            <p className="mt-2 sm:mt-3 text-gray-500">
                                of customers rate their experience with Stitch4U as excellent.
                            </p>
                        </div>
                        {/* End Stats */}
                    </div>
                    {/* End Col */}

                    <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200">
                        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                            {/* Stats */}
                            <div>
                                <p className="text-3xl font-semibold text-primary">99.95%</p>
                                <p className="mt-1 text-gray-500">order accuracy rate</p>
                            </div>
                            {/* End Stats */}

                            {/* Stats */}
                            <div>
                                <p className="text-3xl font-semibold text-primary">5,000+</p>
                                <p className="mt-1 text-gray-500">tailoring projects delivered</p>
                            </div>
                            {/* End Stats */}

                            {/* Stats */}
                            <div>
                                <p className="text-3xl font-semibold text-primary">85%</p>
                                <p className="mt-1 text-gray-500">returning customers yearly</p>
                            </div>
                            {/* End Stats */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>

            {/* features  */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-7">
                        {/* Image Grid */}
                        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                            <div className="col-span-4">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                                    alt="Collaborative workspace"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-3">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                                    alt="Creative collaboration"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-5">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=920&q=80"
                                    alt="Brainstorming session"
                                />
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* End Col */}

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                                    Empower Your Creative Teams
                                </h2>
                                <p className="text-primary">
                                    Utilize powerful tools that streamline workflows, foster collaboration,
                                    and help you bring ideas to life effectively.
                                </p>
                            </div>
                            {/* End Title */}

                            {/* List */}
                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-100 text-logoBrown">
                                        <Check className="shrink-0 size-3.5 text-darkPrimary" />
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-primary">
                                            <span className="font-bold">Boost productivity</span> by eliminating bottlenecks
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-100 text-logoBrown">
                                        <Check className="shrink-0 size-3.5 text-darkPrimary" />
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-primary">
                                            Save <span className="font-bold">time and resources</span> with streamlined tools
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-100 text-logoBrown">
                                        <Check className="shrink-0 size-3.5 text-darkPrimary" />
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-primary">
                                            Achieve <span className="font-bold">seamless collaboration</span> across teams
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <Link to="/aboutus">
                                        <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-logoBrown">
                                            Learn More About Us
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>

            {/* faqs */}
            <div className='bg-gray-50 py-10 lg:py-14 rounded-tr-3xl rounded-br-3xl mb-10 drop-shadow-md mr-6'>
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                    {/* Grid */}
                    <div className="grid md:grid-cols-5 gap-10">
                        {/* Left Column */}
                        <div className="md:col-span-2">
                            <div className="max-w-xs">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
                                    Frequently
                                    <br />
                                    Asked Questions
                                </h2>
                                <p className="mt-1 hidden md:block text-gray-600">
                                    Answers to the most frequently asked questions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-3">
                            {/* Accordion */}
                            <div className="divide-y divide-gray-200">
                                {faqData.map((item, index) => (
                                    <div key={index} className="py-3">
                                        <button
                                            className="group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition duration-500 hover:text-darkPrimary focus:outline-none focus:text-darkPrimary"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            {item.question}
                                            {activeIndex === index ? (
                                                <ChevronUp className="size-5 text-primary group-hover:text-darkPrimary" />
                                            ) : (
                                                <ChevronDown className="size-5 text-primary group-hover:text-darkPrimary" />
                                            )}
                                        </button>
                                        <div
                                            className={`mt-3 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* End Accordion */}
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonials  */}
            <div className="">
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16 mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary text-center font-semibold">
                            Loved by business and individuals across the globe
                        </h2>
                    </div>
                    {/* End Title */}

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="flex h-auto">
                                <div className="flex flex-col bg-gray-50 rounded-xl">
                                    <div className="flex-auto p-4 md:p-6">
                                        <p className="text-base italic md:text-lg text-gray-800">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                    </div>

                                    <div className="p-4 bg-logoBrown rounded-b-xl md:px-7">
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

        </div>

    );
};

export default HeroSection;
