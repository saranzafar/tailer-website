import { AboutSection, FeatureCards, HowitWork, Testimonials } from '../components';
import BlurIn from '../components/ui/blur-in';
import { DotPattern } from '../components/ui/dot-pattern';

const Home = () => {

    return (
        <div className='bg-light-blue-bg'>
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

            <AboutSection />
            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>

    );
};

export default Home;
