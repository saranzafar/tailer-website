import { Link } from 'react-router-dom';
import { MapPin, MapPinCheckInside, Users } from 'lucide-react';
import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react';
import { Divider, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';
import { Button } from '../components/ui/button';
import BlurIn from '../components/ui/blur-in';
import MorphingText from '../components/ui/morphing-text';
import { DotPattern } from '../components/ui/dot-pattern';

const Home = () => {
    const texts = [
        "Welcome",
        "To",
        "Stitch4U"
    ];

    return (
        <div className=''>
            {/* Hero */}
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden  bg-light-blue-bg">
                <BlurIn
                    word="Welcome to Stitch4U"
                    className="text-4xl font-bold text-black dark:text-white"
                />
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                />
            </div>


            {/* How it works  */}
            <HowitWork />

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards />
            </div>





            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default Home;
