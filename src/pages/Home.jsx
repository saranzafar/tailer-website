import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                            Start your journey with <span className="text-primary">Preline</span>
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                            Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <Link
                                to="#"
                                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-logoBrown focus:outline-none focus:bg-logoBrown disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Get started
                                <ArrowRight className="shrink-0 size-4" />
                            </Link>
                            <Link
                                to="#"
                                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                                Contact sales team
                            </Link>
                        </div>
                        {/* End Buttons */}

                        {/* Review */}
                        <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                            {/* Review */}
                            <div className="py-5">
                                <div className="flex gap-x-1">
                                    {/* Icons */}
                                    <svg
                                        className="size-4 text-gray-800 dark:text-neutral-200"
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <svg
                                        className="size-4 text-gray-800 dark:text-neutral-200"
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <svg
                                        className="size-4 text-gray-800 dark:text-neutral-200"
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <svg
                                        className="size-4 text-gray-800 dark:text-neutral-200"
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    {/* Additional icons repeated here */}
                                </div>

                                <p className="mt-3 text-sm text-gray-800 dark:text-neutral-200">
                                    <span className="font-bold">4.6</span> /5 - from 12k reviews
                                </p>
                            </div>
                        </div>
                        {/* End Review */}
                    </div>
                        <img src="https://cdn.pixabay.com/photo/2020/06/14/03/08/tailor-5296384_960_720.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
