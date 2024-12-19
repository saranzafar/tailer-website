import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react'
import { MapPin, MapPinCheckInside, Users } from 'lucide-react'

function HowitWork() {
    return (
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
        </div>
    )
}

export default HowitWork