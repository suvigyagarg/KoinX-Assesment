import mongoose from "mongoose";


const UserTransactionSchema = new mongoose.Schema({
    userAddress: {
        type: String,
        required: true,
        unique: true, 
    },
    transactions: {
        type: Array, 
        default: [], 
    },
},
{
    timestamps: true, 
});

const UserTransaction = mongoose.model("UserTransaction", UserTransactionSchema);

export default UserTransaction;
