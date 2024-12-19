import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className="max-w-[85rem] mx-auto px-6 sm:px-6 lg:px-8 bg-dark-blue-bg rounded-3xl relative mt-20">
            {/* Grid */}
            <div className="grid md:grid-cols-12 gap-8 xl:gap-20 md:items-center py-[2rem]">
                <div className='text-center md:text-start md:col-span-8 col-span-12 '>
                    <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-white">
                        Tailoring Made Simple – Find Your <span className='text-button'>Perfect</span> Fit Nearby
                    </h1>
                    <p className="mt-3 text-lg text-gray-300">
                        Welcome to Stitch4U, your trusted partner for personalized tailoring services right at your fingertips. Whether you're a customer searching for expert tailors, a professional tailor seeking new clients, or a business managing multiple tailors, we make it easy to connect and create. Start your journey with Stitch4U and discover tailoring like never before!
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 grid gap-3 w-full sm:inline-flex sm:text-center">
                        <Link
                            to="#"
                            className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-button text-white hover:bg-button-hover focus:outline-none focus:bg-button-hover disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Get Started
                            <ArrowRight className="shrink-0 size-4" />
                        </Link>
                        <Link
                            to="/pricing-plans"
                            className="py-3 px-4 inline-flex transition duration-200 justify-center items-center gap-x-2 text-sm font-medium rounded-lg  text-button shadow-sm focus:outline-none focus:bg-button-hover hover:text-button-hover disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Pricing Plans
                        </Link>
                    </div>
                    {/* End Buttons */}
                </div>
                <div className='col-span-12 md:col-span-4 '>
                    <div className='w-full flex justify-center items-center md:justify-end'>
                        <img
                            className='drop-shadow-lg rounded-lg hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300  max-h-[35rem] object-cover opacity-90 hover:opacity-100'
                            src="https://images.unsplash.com/photo-1628565931779-4f4f0b4f578a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="stitch4u"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection