import { Button } from '@material-tailwind/react';
import { AboutSection, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';
import { useNavigate } from 'react-router-dom';
import { UseVerification } from '../utils/VerificationContext';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = UseVerification();


    useEffect(() => {
        // Extract session ID from the URL
        const queryParams = new URLSearchParams(window.location.search);
        const sessionId = queryParams.get('session_id');

        if (sessionId) {
            console.log('Session ID found:', sessionId);

            // Save the session ID to local storage
            localStorage.setItem('session_id', sessionId);

            // Optionally clean up the URL
            queryParams.delete('session_id');
            const newUrl = `${window.location.origin}${window.location.pathname}${queryParams.toString()}`;
            window.history.replaceState(null, '', newUrl);
            toast.success("Add Your Shop Now. ASAP!")
            toast.success("Plan purchased successfully!")
            // Redirect to the profile page with a success message
            navigate('/profile');
        }
    }, [navigate]);

    const featureCardDescription =
        "Discover top-rated shops and businesses in your area with our Featured Businesses section. Highlighting the best in the industry, these trusted professionals are ready to deliver exceptional services.";

    return (
        <div className="bg-light-blue-bg">
            {/* Hero */}
            <HeroSection text="Welcome to Stitch4U" />

            {/* How it works */}
            {!isLoggedIn && <HowitWork />}

            {/* Featured locations */}
            <div className="bg-light-blue-bg pt-6 pb-12">
                <FeatureCards
                    col="4"
                    title="Featured Businesses"
                    pagination={4}
                    description={featureCardDescription}
                />
                <div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 text-button mx-auto mt-10"
                        onClick={() => navigate('/shops')}
                    >
                        See More{' '}
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

            {/* How it works */}
            {isLoggedIn && <HowitWork />}

            <AboutSection />

            {/* Testimonials */}
            <div className="bg-light-blue-bg py-14">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;
