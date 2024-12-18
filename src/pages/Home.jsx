import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MapPinCheckInside, Users } from 'lucide-react';
import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react';
import { Divider, FeatureCards, Testimonials } from '../components';

const HeroSection = () => {



    return (
        <div className=''>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-6 sm:px-6 lg:px-8 bg-dark-blue-bg rounded-3xl relative py-[4rem] mt-20">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
                    <div className='text-center md:text-start'>
                        <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-white">
                            Tailoring Made Simple – Find Your <span className='text-button'>Perfect</span> Fit Nearby
                        </h1>
                        <p className="mt-3 text-lg text-gray-300">
                            Welcome to Stitch4U, your trusted partner for personalized tailoring services right at your fingertips. Whether you're a customer searching for expert tailors, a professional tailor seeking new clients, or a business managing multiple tailors, we make it easy to connect and create. Start your journey with Stitch4U and discover tailoring like never before!
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <Link
                                to="#"
                                className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-button text-white hover:bg-button-hover focus:outline-none focus:bg-button-hover disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Get Started
                                <ArrowRight className="shrink-0 size-4" />
                            </Link>
                            <Link
                                to="/contactus"
                                className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-button  text-button shadow-sm hover:bg-button focus:outline-none focus:bg-button-hover hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Pricing Plans
                            </Link>
                        </div>
                        {/* End Buttons */}
                    </div>
                    <div>
                        <div className='w-full md:w-[30rem] absolute -top-14 right-8 '>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53448.20783131414!2d73.70062245755294!3d33.148156882764255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391feb8b4d030e19%3A0x4ec2b8053d7b1051!2sNew%20Mirpur%20City!5e0!3m2!1sen!2s!4v1732989612717!5m2!1sen!2s"
                                width="100%"
                                height="680"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded shadow-lg"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

            <Divider />

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards />
            </div>


            {/* How it works  */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-[6rem]">
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center place-items-center">
                    <div className="lg:col-span-6">
                        {/* Image Grid */}
                        <div className="grid grid-cols-12 gap-4 items-center lg:-translate-x-10">
                            <div className="col-span-3">
                                <img
                                    className="rounded-xl hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300"
                                    src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Collaborative workspace"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-3">
                                <img
                                    className="rounded-xl hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300"
                                    src="https://images.pexels.com/photos/17445146/pexels-photo-17445146/free-photo-of-a-smartphone-with-displayed-directions-attached-next-to-the-steering-wheel-in-a-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Creative collaboration"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-5">
                                <img
                                    className="rounded-xl hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300"
                                    src="https://images.pexels.com/photos/8112186/pexels-photo-8112186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Brainstorming session"
                                />
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* End Col */}

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                                    How it Works?
                                </h2>
                                <p className="text-primary">
                                    Getting started with Stitch4U is quick and effortless—just follow these three simple steps!
                                </p>
                            </div>
                            {/* End Title */}

                            {/* List */}
                            <Timeline>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2" color='indigo'>
                                            <MapPin className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Locate
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            Enable your location, and we'll instantly find the best tailors and businesses near you
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2" color='indigo'>
                                            <MapPinCheckInside className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Choose
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            Browse profiles, read reviews, and pick the perfect tailor or business for your needs.
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2" color='indigo'>
                                            <Users className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            Connect
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody>
                                        <Typography color="gary" className="font-normal text-gray-600">
                                            Connect – Contact directly to discuss your requirements and get started right away!
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                            </Timeline>

                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>


            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default HeroSection;
