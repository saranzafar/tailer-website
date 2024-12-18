import React from 'react'
import { AuthCard, Divider, PricingPlans } from '../components'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="max-w-[85rem] mx-auto px-6 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="flex justify-center items-center py-[10rem]">
                <div className='text-center md:text-start space-y-8'>
                    <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-center">
                        Find Your Perfect Fit Nearby
                    </h1>
                    <p className="mt-3 text-lg text-text-for-white-bg text-center">
                        Welcome to Stitch4U, your trusted partner for personalized tailoring services right at your fingertips. Whether you&apos;re a customer searching for expert tailors, a professional tailor seeking new clients, or a business managing multiple tailors, we make it easy to connect and create. Start your journey with Stitch4U and discover tailoring like never before!
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center items-center gap-2">
                        <Link
                            to="/pricing-plans"
                            className="py-3 px-4 shadow transition duration-200 bg-button hover:bg-button-hover font-semibold text-white flex justify-center items-center rounded-lg gap-2"
                        >
                            Tailor Signup
                            <ArrowRight className="shrink-0 size-4" />
                        </Link>
                        <Link
                            to="/signup"
                            className="py-3 px-4 transition duration-200 text-button hover:text-button-hover font-semibold flex justify-center items-center rounded-lg gap-2"
                        >
                            Customer Signup
                        </Link>
                    </div>
                    {/* End Buttons */}
                </div>
            </div>
        </div>
    )
}

export default LandingPage