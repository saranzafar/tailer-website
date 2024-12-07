import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function AuthCard({ userType = "User", description = "description" }) {

    const handleSecondaryClick = () => {
        if (userType == "Tailor" || userType == "tailor") {
            toast.error('Choose a Pricing Plane First');
            const pricingSection = document.getElementById("pricingPlan");
            if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 max-w-md mx-auto">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <img src={userType == "Tailor" ? "/img/tailorIcon.png" : "/img/customerIcon.png"} alt="stitch4u" className='w-28 mx-auto' />
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        {userType == "Tailor" ? "Tailor" : "Customer"}
                    </h1>
                    {/* Description */}
                    {description && (
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-5">
                    <section>
                        <div className="grid gap-y-4">
                            <Link to={`/login`}>
                                <Button size="md" fullWidth={true} className="bg-primary hover:bg-logoBrown">
                                    Login as {userType}
                                </Button>
                            </Link>
                            <Link to={userType == "Tailor" ? "#" : `/signup`}>
                                <Button size="md" fullWidth={true} variant='outlined' onClick={handleSecondaryClick}>
                                    Register as {userType}
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AuthCard;
