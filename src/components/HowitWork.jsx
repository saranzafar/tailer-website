import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react'
import { MapPin, MapPinCheckInside, Users } from 'lucide-react'
import AuthCard from './auth/AuthCard'
import { UseVerification } from '../utils/VerificationContext';

function HowitWork() {
    const { isLoggedIn } = UseVerification();

    return (
        <div className="max-w-[85rem] px-4 py-10 md:py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto md:my-[1rem]">
            {/* Grid */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center place-items-center">
                <div className="lg:col-span-6">
                    {/* Image Grid */}
                    {isLoggedIn ? (
                        <img
                            className="h-96 w-full rounded-lg object-cover object-center"
                            src="./img/timeline.png"
                            alt="nature image"
                        />
                    ) : (
                        <div className="grid grid-cols-12 gap-4 items-center lg:-translate-x-10">
                            <div className="col-span-12 md:col-span-6">
                                <AuthCard userType='Tailor' description='Join Stitch4U as a tailor and simplify your work with our easy-to-use platform—start your journey today!' />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <AuthCard description='Explore Stitch4U as a customer and experience hassle-free tailoring services in just a few clicks!' />
                            </div>
                        </div>
                    )}
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
                                        Enable your location, and we&apos;ll instantly find the best tailors and businesses near you
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
        </div >
    )
}

export default HowitWork