import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Typography } from '@material-tailwind/react';
import { CheckIcon, Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import httpServer from '../utils/httpService';

function PricingPlans({ page = "landingPage" }) {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState({});

    const loadPlans = async () => {
        setLoading(true);
        try {
            const response = await httpServer("get", `subscription/`, {}, false);
            setPlans(response.data);
        } catch (err) {
            console.error("Error fetching plans:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleFreeTrial = async () => {
        setButtonLoading((prev) => ({ ...prev, freeTrial: true }));
        try {
            await httpServer("post", "subscription/free-trial/");
        } catch (err) {
            console.error("Error handling free trial:", err);
        } finally {
            setButtonLoading((prev) => ({ ...prev, freeTrial: false }));
        }
    };

    const handlePlanClick = async (planId) => {
        setButtonLoading((prev) => ({ ...prev, [planId]: true }));
        try {
            const response = await httpServer("post", `subscription/create-checkout-session/`, {
                plan_id: planId,
            });
            console.log("Checkout session created:", response.data);

            // Redirect to the URL received in the response
            if (response.data?.url) {
                window.location.href = response.data.url;
            } else {
                console.error("No URL found in the response.");
            }
        } catch (err) {
            console.error("Error creating checkout session:", err);
        } finally {
            setButtonLoading((prev) => ({ ...prev, [planId]: false }));
        }
    };


    useEffect(() => {
        loadPlans();
    }, []);


    return (
        <div className="max-w-[85rem] mx-auto px-4" id="pricingPlan">
            <h2 className="font-bold text-3xl lg:text-4xl text-primary text-center my-10">
                Pricing Plans
            </h2>
            <p className="mt-3 text-lg text-gray-800 max-w-[50rem] text-center mx-auto mb-10">
                Choose the plan that fits your needs! Whether you&apos;re a customer, a tailor, or a business, our flexible pricing options are designed to provide the perfect balance of value and features. Start your journey with Stitch4U today!
            </p>
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 place-items-center">
                    {/* Free Trial Card */}
                    <Card
                        variant="gradient"
                        color="green"
                        className="w-full max-w-[22rem] p-8 bg-gray-50 hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography variant="small" className="font-normal uppercase">
                                {/* <Chip
                                    variant="gradient"
                                    color="gray"
                                    value="Free Trial"
                                    className="inline-block"
                                /> */}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-5xl font-normal"
                            >
                                Free
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to basic features</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">No credit card required</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">7-day trial period</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="md"
                                color="white"
                                variant="gradient"
                                onClick={handleFreeTrial}
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                                disabled={buttonLoading.freeTrial}
                            >
                                {buttonLoading.freeTrial ? (
                                    <Loader className="animate-spin h-5 w-5 mx-auto" />
                                ) : (
                                    "Start Free Trial"
                                )}
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Dynamic Plans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
                        {plans?.map((plan, index) => (
                            <Card
                                key={plan.id}
                                variant="gradient"
                                color={index % 2 === 1 ? 'indigo' : ''}
                                className="w-full max-w-[24rem] p-8 bg-gray-50 hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                                >
                                    <Typography variant="small" className="font-normal uppercase">
                                        <Chip
                                            variant="gradient"
                                            // color="gray"
                                            color={index % 2 === 1 ? 'gray' : ''}
                                            value={`${plan.name}`}
                                            className="inline-block"
                                        />
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        // color="black"
                                        color={index % 2 === 1 ? 'white' : 'black'}
                                        className="mt-6 flex justify-center gap-1 text-5xl font-normal"
                                    >
                                        <span className="mt-2 text-xl">PKR</span>
                                        {parseFloat(plan.price).toFixed(2)}{" "}
                                    </Typography>
                                </CardHeader>
                                <CardBody className="p-0">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <CheckIcon />
                                            </span>
                                            <Typography className="font-normal">Access to premium features</Typography>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <CheckIcon />
                                            </span>
                                            <Typography className="font-normal">Priority support</Typography>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <CheckIcon />
                                            </span>
                                            <Typography className="font-bold">Duration: {plan.duration.split(" ")[0]} Days</Typography>
                                        </li>
                                    </ul>
                                </CardBody>
                                <CardFooter className="mt-12 p-0">
                                    <Button
                                        size="md"
                                        variant="gradient"
                                        color={index % 2 === 1 ? 'white' : 'black'}
                                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                        ripple={false}
                                        fullWidth={true}
                                        onClick={() => handlePlanClick(plan.stripe_price_id)}
                                        disabled={buttonLoading[plan.id]} // Disable button while loading
                                    >
                                        {buttonLoading[plan.id] ? (
                                            <Loader className="animate-spin h-5 w-5 mx-auto" />
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PricingPlans;
