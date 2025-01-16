import { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    IconButton,
    Typography
} from '@material-tailwind/react'
import { Heart } from 'lucide-react'
import toast from "react-hot-toast";
import httpServer from "../utils/httpService";
import { useNavigate } from "react-router-dom";


function FeatureCards({ col = '4', title, pagination = 4 }) {
    const [shops, setShops] = useState([]); // Stores fetched shop data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate()

    // Fetch shop data from API
    const loadShops = async () => {
        try {
            const response = await httpServer("get", `shop/shops/?page-size=${pagination}`, {}, false);
            if (response.data) {
                setShops(response.data);
            }
        } catch (err) {
            setError("Failed to load shop data.");
            toast.error("Error fetching data.");
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadShops();
    }, []);

    const viewSingleShop = (id) => {
        navigate(`/shop/${id}`)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Typography>Loading shops...</Typography>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <Typography>{error}</Typography>
            </div>
        );
    }

    return (
        <div className='max-w-[85rem] mx-auto'>
            <h2 className="font-bold text-3xl lg:text-4xl text-dark-blue-bg text-center my-5">
                {title}
            </h2>
            <p className="mt-3 text-lg text-text-for-white-bg max-w-[50rem] text-center mx-auto mb-10">
                Discover top-rated shops and businesses in your area with our Featured Businesses section. Highlighting the best in the industry, these trusted professionals are ready to deliver exceptional services.
            </p>
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${col == 3 ? "md:grid-cols-3" : col == 4 ? "md:grid-cols-4" : "md:grid-cols-2"
                    } gap-6 place-items-center`}
            >
                {shops?.map((item) => (
                    <Card key={item.id} className="w-full max-w-[26rem] drop-shadow-xl bg-white hover:translate-y-[-5px] hover:drop-shadow-xl transition-transform duration-300">
                        <CardHeader floated={false} color="blue-gray">
                            <div className="relative group">
                                <img
                                    src={item.thumbnail}
                                    alt={item.name}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <Heart fill="transparent" />
                                </IconButton>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <Chip size="sm" variant='ghost' value="Shop" className='inline-block my-2' />
                                    <Typography variant="h5" color="blue-gray" className="font-medium">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="p" color="gray" className="font-medium ">
                                        {item.city}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="p" color="gray" className="font-normal text-sm">
                                {item.address}, {item.postal_code}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 flex flex-col gap-2">
                            <Button size="md" fullWidth={true} className="bg-button hover:bg-button-hover" onClick={() => viewSingleShop(item.id)}>
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

export default FeatureCards;
