import { Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Typography } from '@material-tailwind/react'
import { Eye, Heart, Map, MapPin, Milestone } from 'lucide-react'

function FeatureCards() {
    const cardData = [
        {
            id: 1,
            image: "https://i.pinimg.com/originals/9e/63/57/9e6357714801b7904279f5f5e684e1cf.jpg",
            title: "Classic Tailoring",
            location: "Mirpur AJK",
            type: "Tailor Shop",
            rating: 5.0,
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EOnOlXumA0LtlSCF6UydCqKfn4q2xL8zFA&s",
            title: "Elegant Couture",
            location: "Lahore",
            type: "Couture",
            rating: 4.8,
            fill: "red",
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zBUxiSqOuERgevOV0Rtd1f2BZ6jTNL5gOg&s",
            title: "Traditional Tailor",
            location: "Islamabad",
            type: "Tailor Shop",
            rating: 4.9,
            fill: "transparent",
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMSqlk2Xprg2fkLfQg8cygI19zXIa9UBkuQ&s",
            title: "Modern Stitch",
            location: "Karachi",
            type: "Fashion Tailor",
            rating: 5.0,
            fill: "transparent",
        },
        {
            id: 5,
            image: "https://images.squarespace-cdn.com/content/v1/5f4d6f99e8568266d26bb124/1ed12279-33c9-4a45-a59a-efa7ef49b5db/Modernize-9741-2.jpg",
            title: "Sharp Tailoring",
            location: "Peshawar",
            type: "Tailor Shop",
            rating: 4.7,
            fill: "transparent",
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M9GieWTu_xaAnoNi4RNMWr7TKkSgSBcV4Q&s",
            title: "Chic Stitch",
            location: "Multan",
            type: "Fashion Tailor",
            rating: 4.6,
            fill: "transparent",
        },
        {
            id: 7,
            image: "https://i.pinimg.com/originals/9e/63/57/9e6357714801b7904279f5f5e684e1cf.jpg",
            title: "Classic Tailoring",
            location: "Mirpur AJK",
            type: "Tailor Shop",
            rating: 5.0,
        },
        {
            id: 8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EOnOlXumA0LtlSCF6UydCqKfn4q2xL8zFA&s",
            title: "Elegant Couture",
            location: "Lahore",
            type: "Couture",
            rating: 4.8,
            fill: "red",
        },
    ];

    return (
        <div className='max-w-[85rem] mx-auto'>
            <h2 className="font-bold text-3xl lg:text-4xl text-dark-blue-bg text-center my-5">
                Featured Businesses
            </h2>
            <p className="mt-3 text-lg text-text-for-white-bg max-w-[50rem] text-center mx-auto mb-10">
                Discover top-rated tailors and businesses in your area with our Featured Businesses section. Highlighting the best in the industry, these trusted professionals are ready to deliver exceptional tailoring services. Whether it’s for a custom outfit or alterations, explore the finest options near you and experience quality craftsmanship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                {cardData.map((item) => (
                    <Card key={item.id} className="w-full max-w-[26rem] drop-shadow-xl bg-white hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                        <CardHeader floated={false} color="blue-gray">
                            <div className="relative group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <Heart fill={item.fill} />
                                </IconButton>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <Chip size="sm" variant='ghost' value={item.type} className='inline-block my-2' />
                                    <Typography variant="h5" color="blue-gray" className="font-medium">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="p" color="gray" className="font-medium ">
                                        {item.location}
                                    </Typography>
                                </div>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {item.rating}
                                </Typography>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 flex flex-col gap-2">
                            <Button size="md" fullWidth={true} className="bg-button hover:bg-button-hover">
                                View
                            </Button>
                            <Button size="md" fullWidth={true} variant='outlined' className='border-button text-button' >
                                Visit Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards