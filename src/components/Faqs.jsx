import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

function Faqs() {
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

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
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
                                Got questions? We’ve got answers! Explore our frequently asked questions to find quick solutions and helpful insights about using Stitch4U, managing your account, and maximizing your experience.
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
    )
}

export default Faqs