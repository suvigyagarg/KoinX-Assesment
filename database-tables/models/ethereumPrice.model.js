import mongoose from "mongoose";

const EthereumPriceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        immutable: true,
    },
},
{
    timestamps: {
        createdAt: true,
        updatedAt: false,
    },
}
);
 const EthereumPrice = mongoose.model("EthereumPrice", EthereumPriceSchema);

 export default EthereumPrice;