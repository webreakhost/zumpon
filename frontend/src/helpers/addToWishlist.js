// import SummaryApi from "../common";
import { BACKENDURL } from '../config/config';
import { toast } from 'react-toastify';

const addToWishlist = async (e, id) => {
    e?.stopPropagation();
    e?.preventDefault();

    const response = await fetch(BACKENDURL + "/api/v1/wishlist/addtowish", {
        method: "POST",
        credentials: 'include',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({ productId: id })
    });

    const responseData = await response.json();

    if (responseData.success) {
        toast.success(responseData.message);
    }

    if (responseData.error) {
        toast.error(responseData.message);
    }

    return responseData;
};

export default addToWishlist;