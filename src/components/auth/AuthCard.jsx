import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function AuthCard({ userType = "User", description = "description" }) {

    return (
        <div className="mt-7 border border-gray-200 rounded-xl shadow dark:bg-neutral-900 dark:border-neutral-700 max-w-md mx-auto bg-white">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <img src={userType == "Tailor" ? "/img/tailor.png" : "/img/customer.png"} alt="stitch4u" className='w-28 mx-auto' />
                    <h1 className="block text-3xl font-bold text-gray-900 dark:text-white">
                        {userType == "Tailor" ? "Tailor" : "Customer"}
                    </h1>
                    {/* Description */}
                    {description && (
                        <p className="mt-2 text-text-for-white-bg  dark:text-neutral-400">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-5">
                    <section>
                        <div className="grid gap-y-4">
                            <Link to={userType == "Tailor" ? "#" : `/signup`}>
                                <Button size="md" fullWidth={true} variant='text' className='text-button'>
                                    Register as {userType}
                                </Button>
                            </Link>
                            <Link to={`/login`}>
                                <Button size="md" fullWidth={true} className="bg-button hover:bg-button-hover">
                                    Login as {userType}
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
