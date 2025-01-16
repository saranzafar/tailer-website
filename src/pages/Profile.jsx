import { useState } from 'react';
import { ProfileSetting, ShopSetting } from '../components'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

function Profile() {
    const [activeTab, setActiveTab] = useState("shop-management");
    const data = [
        {
            label: "Shop Setting",
            value: "shop-management",
            desc: <ShopSetting />,
        },
        {
            label: "Account Setting",
            value: "account-setting",
            desc: <ProfileSetting />,
        }
    ];

    return (
        <div className='bg-light-blue-bg'>
            <div className="max-w-[85rem] px-4 py-10 md:py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto md:my-[1rem]">

                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-gray-900 font-semibold" : ""}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default Profile