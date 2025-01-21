import React from 'react'
import AddShopSection from './AddShopSection'
import FeatureCards from './FeatureCards'

function ShopSetting() {
    const shopDescription = "Manage and showcase all your shops in one place with ease and efficiency.";
    return (
        <div className=''>
            <AddShopSection />
            <div className='mt-10'>
                <FeatureCards title={"Your Shops"} description={shopDescription} loadFor='dashboard' col='3' />
            </div>
        </div>
    )
}

export default ShopSetting