import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from '@material-tailwind/react'
import { CheckIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function PricingPlans({ page = "landingPage" }) {
    return (
        <div className='max-w-[85rem] mx-auto px-4' id="pricingPlan">
            <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center my-10">
                Pricing Plans
            </h2>
            <p className="mt-3 text-lg text-gray-800 max-w-[50rem] text-center mx-auto mb-10">
                Choose the plan that fits your needs! Whether you&apos;re a customer, a tailor, or a business, our flexible pricing options are designed to provide the perfect balance of value and features. Start your journey with Stitch4U today!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 place-items-center ">
                <Card variant="gradient" color='' className="w-full max-w-[22rem] p-8 bg-gray-50 hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="small"
                            color="black"
                            className="font-normal uppercase"
                        >
                            <Chip variant='ghost' color='indigo' value="1 Shop" className='inline-block' />
                        </Typography>
                        <Typography
                            variant="h1"
                            color="black"
                            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                        >
                            <span className="mt-2 text-4xl">$</span>15{" "}
                            <span className="self-end text-4xl">/mo</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Manage a single shop</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Add up to 5 team members</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Access to 200+ features</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Priority listing in search</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">1 year free updates</Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0">
                        <Link to={"/tailor/register/basic"}>
                            <Button
                                size="md"
                                color="indigo"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card variant="gradient" color='indigo' className="w-full max-w-[22rem] p-8 bg-gray-50 hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal uppercase"
                        >
                            <Chip variant='gradient' color='indigo' value="3 Shops" className='inline-block text-white' />
                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                        >
                            <span className="mt-2 text-4xl">$</span>20{" "}
                            <span className="self-end text-4xl">/mo</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-normal">Manage a 3 shops</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-normal">Add up to 7 team members</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-normal">Access to 300+ features</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-normal">Priority listing in search</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-normal">1.5 years free updates</Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0">
                        <Link to={"/tailor/register/standard"}>
                            <Button
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card variant="gradient" color='' className="w-full max-w-[22rem] p-8 bg-gray-50 hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="small"
                            color="black"
                            className="font-normal uppercase"
                        >
                            <Chip variant='ghost' color='indigo' value="5 Shop" className='inline-block' />
                        </Typography>
                        <Typography
                            variant="h1"
                            color="black"
                            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                        >
                            <span className="mt-2 text-4xl">$</span>30{" "}
                            <span className="self-end text-4xl">/mo</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Manage a single shop</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Add up to 5 team members</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Access to 200+ features</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">Priority listing in search</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon className='text-button' />
                                </span>
                                <Typography className="font-normal">1 year free updates</Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0">
                        <Link to={"/tailor/register/basic"}>
                            <Button
                                size="md"
                                color="indigo"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default PricingPlans