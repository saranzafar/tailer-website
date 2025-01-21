import { Button, IconButton, Typography } from "@material-tailwind/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import httpServer from "../utils/httpService";
import { getAuthCookies, setAuthCookies } from "../utils/cookies";

export default function BannerSection() {
    const [showNotification, setShowNotification] = useState(true);
    const [isFreePlanActive, setIsFreePlanActive] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userData = getAuthCookies();
        setIsFreePlanActive(userData?.isFreePlanActive || false);
    }, []);

    const handleShowNotification = () => {
        setShowNotification(false);
    };

    const activateFreePlan = async () => {
        try {
            setLoading(true)
            const response = await httpServer("post", "subscription/free-trial/");
            // Assuming the response includes updated user data
            const updatedUserData = { ...getAuthCookies(), isFreePlanActive: true };
            setAuthCookies(updatedUserData);
            setIsFreePlanActive(true);
        } catch (error) {
            console.error("Failed to activate free plan:", error);
        } finally {
            setLoading(false)
        }
    };

    if (isFreePlanActive || !showNotification) {
        return null;
    }

    return (
        <section className="container mx-auto sticky z-20 top-[5.1rem]">
            <div className="mb-4 shadow-sm px-4 py-2 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
                <Typography variant="h6" color="white" className="text-md">
                    Unlock more features of the app! Activate your <b>Free Plan</b> today.
                </Typography>
                <Button color="white" size="sm" onClick={activateFreePlan} disabled={loading}>
                    Activate Now
                </Button>
                <IconButton
                    color="white"
                    variant="text"
                    onClick={handleShowNotification}
                >
                    <X className="text-white w-4 h-4 stroke-2" />
                </IconButton>
            </div>
        </section>
    );
}
