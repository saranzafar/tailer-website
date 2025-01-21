import { Button } from '@material-tailwind/react';
import { AboutSection, BannerSection, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';
import { useNavigate } from 'react-router-dom';
import { UseVerification } from '../utils/VerificationContext';


const Home = () => {
    const navigate = useNavigate()
    const { isLoggedIn, logout } = UseVerification();
    const featureCardDescription = "Discover top-rated shops and businesses in your area with our Featured Businesses section. Highlighting the best in the industry, these trusted professionals are ready to deliver exceptional services."

    return (
        <div className='bg-light-blue-bg'>
            <BannerSection />
            {/* Hero */}
            <HeroSection text="Welcome to Stitch4U" />

            {/* How it works  */}
            {!isLoggedIn && <HowitWork />}

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards col='4' title={"Featured Businesses"} pagination={4} description={featureCardDescription} />
                <div className=''>
                    <Button variant="text" className="flex items-center gap-2 text-button mx-auto mt-10" onClick={() => navigate("/shops")}>
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

            {/* How it works  */}
            {isLoggedIn && <HowitWork />}

            <AboutSection />
            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default Home;
