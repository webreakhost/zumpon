import mongoose from "mongoose";

const addToWishlist = mongoose.Schema(
    {
        // productId: {
        //     ref: 'product',
        //     type: String,
        // },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true } ,
        // userId: {
        //     type: String,
        //     required: true,
        // },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('addToWishlist', addToWishlist)
// const addToWishlistModel = mongoose.model('addToWishlist', addToWishlist);

// module.exports = addToWishlistModel;