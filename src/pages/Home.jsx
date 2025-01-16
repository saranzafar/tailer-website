import { Button } from '@material-tailwind/react';
import { AboutSection, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='bg-light-blue-bg'>
            {/* Hero */}
            <HeroSection text="Welcome to Stitch4U" />

            {/* How it works  */}
            <HowitWork />

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards col='4' title={"Featured Businesses"} />
                <div className=''>
                    <Button variant="text" className="flex items-center gap-2 text-button mx-auto" onClick={() => navigate("/shops")}>
                        See More{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            <AboutSection />
            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default Home;
