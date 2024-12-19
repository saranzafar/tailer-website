import { Link } from 'react-router-dom';
import { MapPin, MapPinCheckInside, Users } from 'lucide-react';
import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react';
import { Divider, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';

const Home = () => {

    return (
        <div className=''>
            {/* Hero */}
            <HeroSection />

            <Divider />

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards />
            </div>


            {/* How it works  */}
            <HowitWork />


            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default Home;
