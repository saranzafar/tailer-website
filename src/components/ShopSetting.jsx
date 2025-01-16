import React from 'react'
import AddShopSection from './AddShopSection'
import FeatureCards from './FeatureCards'

function ShopSetting() {
    return (
        <div className=''>
            <AddShopSection />
            <div className='mt-10'>
            <FeatureCards title={"Your Shops"} />
            </div>
        </div>
    )
}

export default ShopSetting