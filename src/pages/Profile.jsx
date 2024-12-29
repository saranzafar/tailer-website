import { AddShopSection, FeatureCards, ProfileSection } from '../components'

function Profile() {
    return (
        <div className='bg-light-blue-bg'>
            <div className="max-w-[85rem] px-4 py-10 md:py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto md:my-[1rem]">
                <div className='grid grid-cols-12 gap-4 place-items-center'>
                    <div className='col-span-12 md:col-span-6 w-full'>
                        <ProfileSection />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <AddShopSection />

                    </div>
                </div>
                <FeatureCards col='4' title={"Your Shops"} />
            </div>
        </div>
    )
}

export default Profile