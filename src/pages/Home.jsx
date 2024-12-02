import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BellIcon, Check, CheckCheck, CheckCircle, CheckIcon, ChevronDown, ChevronUp, DollarSign, Heart, HomeIcon, MapPin, MapPinCheckInside, Star, StarHalf, Users } from 'lucide-react';
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Tooltip, Typography } from '@material-tailwind/react';
import { Divider } from '../components';

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
    const cardData = [
        {
            id: 1,
            image: "https://i.pinimg.com/originals/9e/63/57/9e6357714801b7904279f5f5e684e1cf.jpg",
            title: "Classic Tailoring",
            location: "Mirpur AJK",
            type: "Tailor Shop",
            rating: 5.0,
            description: "Expert tailoring services offering custom suits, dresses, and alterations with a focus on quality and fit.",
            fill: "red",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EOnOlXumA0LtlSCF6UydCqKfn4q2xL8zFA&s",
            title: "Elegant Couture",
            location: "Lahore",
            type: "Couture",
            rating: 4.8,
            description: "Providing top-notch custom-made outfits, from bridal gowns to evening dresses, tailored to perfection.",
            fill: "red",
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zBUxiSqOuERgevOV0Rtd1f2BZ6jTNL5gOg&s",
            title: "Traditional Tailor",
            location: "Islamabad",
            type: "Tailor Shop",
            rating: 4.9,
            description: "Specializing in traditional garments such as shalwar kameez, with impeccable attention to detail and design.",
            fill: "transparent",
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMSqlk2Xprg2fkLfQg8cygI19zXIa9UBkuQ&s",
            title: "Modern Stitch",
            location: "Karachi",
            type: "Fashion Tailor",
            rating: 5.0,
            description: "A fashion-forward tailor offering stylish and trendy outfits with modern cuts and excellent stitching.",
            fill: "transparent",
        },
        {
            id: 5,
            image: "https://images.squarespace-cdn.com/content/v1/5f4d6f99e8568266d26bb124/1ed12279-33c9-4a45-a59a-efa7ef49b5db/Modernize-9741-2.jpg",
            title: "Sharp Tailoring",
            location: "Peshawar",
            type: "Tailor Shop",
            rating: 4.7,
            description: "Tailoring services that specialize in men's suits, shirts, and alterations with a sharp, professional finish.",
            fill: "transparent",
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M9GieWTu_xaAnoNi4RNMWr7TKkSgSBcV4Q&s",
            title: "Chic Stitch",
            location: "Multan",
            type: "Fashion Tailor",
            rating: 4.6,
            description: "Chic and contemporary tailoring services, providing personalized fashion for both men and women.",
            fill: "transparent",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className=''>
            {/* Hero */}
            <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div className='text-center md:text-start'>
                        <h1 className="block text-3xl font-bold text-primary  sm:text-4xl lg:text-6xl lg:leading-tight">
                            Tailoring Made Simple – Find Your Perfect Fit Nearby
                        </h1>
                        <p className="mt-3 text-lg text-gray-800">
                            Welcome to Stitch4U, your trusted partner for personalized tailoring services right at your fingertips. Whether you're a customer searching for expert tailors, a professional tailor seeking new clients, or a business managing multiple tailors, we make it easy to connect and create. Start your journey with Stitch4U and discover tailoring like never before!
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
                                Pricing Plans
                            </Link>
                        </div>
                        {/* End Buttons */}
                    </div>
                    <div>
                        <div className='w-full md:w-[30rem]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53448.20783131414!2d73.70062245755294!3d33.148156882764255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391feb8b4d030e19%3A0x4ec2b8053d7b1051!2sNew%20Mirpur%20City!5e0!3m2!1sen!2s!4v1732989612717!5m2!1sen!2s"
                                width="100%"
                                height="600"
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

            <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center my-10">
                    Empower Your Creative Teams
                </h2>
                <p className="mt-3 text-lg text-gray-800 max-w-[50rem] text-center mx-auto mb-10">
                    Discover top-rated tailors and businesses in your area with our Featured Businesses section. Highlighting the best in the industry, these trusted professionals are ready to deliver exceptional tailoring services. Whether it’s for a custom outfit or alterations, explore the finest options near you and experience quality craftsmanship.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {cardData.map((item) => (
                        <Card key={item.id} className="w-full max-w-[26rem] shadow-lg bg-gray-50">
                            <CardHeader floated={false} color="blue-gray">
                                <div className="relative group">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                    <IconButton
                                        size="sm"
                                        color="red"
                                        variant="text"
                                        className="!absolute top-4 right-4 rounded-full"
                                    >
                                        <Heart fill={item.fill} />
                                    </IconButton>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <div>
                                        <Chip size="sm" variant='ghost' value={item.type} className='inline-block my-2' />
                                        <Typography variant="h5" color="blue-gray" className="font-medium">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="p" color="gray" className="font-medium ">
                                            {item.location}
                                        </Typography>
                                    </div>
                                    <Typography
                                        color="blue-gray"
                                        className="flex items-center gap-1.5 font-normal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {item.rating}
                                    </Typography>
                                </div>
                                <Typography color="gray">
                                    {item.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true} className="bg-darkPrimary hover:bg-logoBrown">
                                    Read More
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <Divider />

            {/* How it works  */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center">
                    <div className="lg:col-span-6">
                        {/* Image Grid */}
                        <div className="grid grid-cols-12 gap-4 items-center lg:-translate-x-10">
                            <div className="col-span-3">
                                <img
                                    className="rounded-xl hover:scale-105 box-border transition duration-300"
                                    src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Collaborative workspace"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-3">
                                <img
                                    className="rounded-xl hover:scale-105 box-border transition duration-300"
                                    src="https://images.pexels.com/photos/17445146/pexels-photo-17445146/free-photo-of-a-smartphone-with-displayed-directions-attached-next-to-the-steering-wheel-in-a-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Creative collaboration"
                                />
                            </div>
                            {/* End Col */}

                            <div className="col-span-5">
                                <img
                                    className="rounded-xl hover:scale-105 box-border transition duration-300"
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
                                    Empower Your Creative Teams
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
                                        <TimelineIcon className="p-2">
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
                                        <TimelineIcon className="p-2">
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
                                        <TimelineIcon className="p-2">
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

            <Divider />

            {/* pricing plan  */}
            <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center my-10">
                    Pricing Plan
                </h2>
                <p className="mt-3 text-lg text-gray-800 max-w-[50rem] text-center mx-auto mb-10">
                    Choose the plan that fits your needs! Whether you&apos;re a customer, a tailor, or a business, our flexible pricing options are designed to provide the perfect balance of value and features. Start your journey with Stitch4U today!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    <Card variant="gradient" color='' className="w-full max-w-[20rem] p-8 bg-gray-50">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="black"
                                className="font-normal uppercase"
                            >
                                <Chip variant='ghost' value="1 Shop" className='inline-block' />
                            </Typography>
                            <Typography
                                variant="h1"
                                color="black"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>15{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Manage a single shop</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Add up to 5 team members</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to 200+ features</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Priority listing in search</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">1 year free updates</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color="black"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card variant="gradient" color='gray' className="w-full max-w-[20rem] p-8 bg-gray-50">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                            >
                                <Chip variant='gradient' value="3 Shops" className='inline-block' />
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>20{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Manage a 3 shops</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Add up to 7 team members</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to 300+ features</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Priority listing in search</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">1.5 years free updates</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card variant="gradient" color='' className="w-full max-w-[20rem] p-8 bg-gray-50">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="black"
                                className="font-normal uppercase"
                            >
                                <Chip variant='ghost' value="5 Shops" className='inline-block' />
                            </Typography>
                            <Typography
                                variant="h1"
                                color="black"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>30{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Manage multiple shops</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Unlimited team members</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to all features</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Top priority listing in search</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">
                                        Lifetime free updates
                                    </Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color="black"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Divider />

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

            <Divider />

            {/* testimonials  */}
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
                            <div key={index} className="flex h-auto">
                                <div className="flex flex-col bg-gray-50 rounded-xl">
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

            <Divider />

        </div>

    );
};

export default HeroSection;
