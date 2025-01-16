
function AboutSection() {
    return (
        <div className="max-w-[85rem] px-4 py-10 md:py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto md:my-[1rem]">
            <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center place-items-center">
                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-4xl lg:text-4xl text-gray-900">
                                About us
                            </h2>
                            <p className="text-primary">
                                At Stitch4U, we are dedicated to bridging the gap between tailors and customers through our innovative platform. Our mission is to simplify the tailoring process by providing a seamless, user-friendly experience for both skilled tailors and individuals seeking high-quality, customized garments. Whether you're a professional tailor looking to grow your business or a customer in search of perfect-fitting clothes, Stitch4U is here to cater to your needs. With a commitment to quality, convenience, and customer satisfaction, we aim to transform the way tailoring services are delivered and experienced. </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <img src="./img/about.png" alt="stitch4u" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;