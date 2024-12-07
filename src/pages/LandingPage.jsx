import React from 'react'
import { AuthCard, Divider, PricingPlans } from '../components'

function LandingPage() {
    return (
        <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 md:items-center">
                <div className=''>
                    <AuthCard
                        userType="Tailor"
                        description="Access exclusive features for tailors in your area. Manage your clients efficiently, showcase your skills, and grow your tailoring business with ease."
                    />
                </div>
                <div>
                    <AuthCard
                        userType="Customer"
                        description="Find the best tailoring services near you! Connect with skilled tailors, customize your outfits, and experience hassle-free tailoring solutions."
                    />
                </div>

            </div>

            <Divider />

            {/* pricing plan  */}
            <PricingPlans />

            <Divider />

        </div>
    )
}

export default LandingPage