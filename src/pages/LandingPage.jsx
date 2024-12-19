import { HeroSection, HowitWork, Testimonials } from '../components'
import { Link } from 'react-router-dom'
import { LogIn, Shirt } from 'lucide-react'

function LandingPage() {
    return (
        <div>
            <HeroSection />

            <div className='bg-light-blue-bg  py-[4rem] mt-[4rem]'>
                <div className="max-w-[85rem] mx-auto px-6 sm:px-6 lg:px-8 rounded-3xl relative">
                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-4 md:items-center py-[4rem]">
                        <div className=''>
                            <div className="p-6">
                                <h2 className="text-4xl font-bold text-dark-blue-bg mb-2">Discover Tailors</h2>
                                <p className="text-gray-600 mb-4">
                                    Explore a network of talented tailors near you. Whether you need custom stitching or alterations, find the perfect fit here.
                                </p>
                                <Link
                                    to="/signup"
                                    className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-button text-white hover:bg-button-hover focus:outline-none focus:bg-button-hover disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        <div className=''>
                            <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                                <div className='flex gap-2 items-center mb-4 text-button'>
                                    <LogIn className='' width={30} height={30} />
                                    <h3 className="text-xl font-semibold mb-2">Tailor Signup</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Are you a professional tailor? Join our platform to connect with customers looking for custom clothing solutions and expert tailoring services.
                                </p>
                                <Link to="/pricing-plans" className="text-button underline hover:text-button-hover">
                                    Register here
                                </Link>
                            </div>
                        </div>

                        <div className=''>
                            <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                                <div className='flex gap-2 items-center mb-4 text-button'>
                                    <Shirt className='' width={30} height={30} />
                                    <h3 className="text-xl font-semibold mb-2">Customer Signup</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Looking for the right tailor for your needs? Register now to browse profiles and connect with top-rated tailors in your area.
                                </p>
                                <Link to="/signup" className="text-button underline hover:text-button-hover">
                                    Register here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* How it works  */}
            <HowitWork />


            {/* testimonials  */}
            <div className='bg-light-blue-bg py-14'>
                <Testimonials />
            </div>

        </div>
    )
}

export default LandingPage