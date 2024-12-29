import { AboutSection, FeatureCards, HeroSection, HowitWork, Testimonials } from '../components';

const Home = () => {

    return (
        <div className='bg-light-blue-bg'>
            {/* Hero */}
            <HeroSection text="Welcome to Stitch4U" />

            {/* How it works  */}
            <HowitWork />

            {/* feature locations  */}
            <div className=' bg-light-blue-bg pt-6 pb-12'>
                <FeatureCards col='4' title={"Featured Businesses"} />
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
