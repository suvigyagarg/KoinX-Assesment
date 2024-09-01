import UserTransaction from "../../database-tables/models/userTransaction.model.js";
import EthereumPrice from "../../database-tables/models/ethereumPrice.model.js";
import axios from "axios";
import {GET_TRANSACTIONS} from "../../constants/api-constants.js"

export const GetUserDetails = async (data) => {
    try {
       const { userAddress } = data;
       const APIKEY = process.env.ETHERSCAN_API_TOKEN;
       const response = await axios.get(`${GET_TRANSACTIONS}&address=${userAddress}&apikey=${APIKEY}`);
      if(response?.data?.status === "0") {
        return {
            status: 401,
            message: response.data.result,
        }
       };
       const result = response.data.result;

       const userTransactions=  await UserTransaction.findOneAndUpdate(
        { userAddress: userAddress },
        { $set: { transactions: result } },
        { upsert: true, new: true }
    );
     
     const transactions = userTransactions.transactions;
    const totalExpenses = transactions.reduce((sum, tx) => {
        const gasUsed = parseFloat(tx.gas);
        const gasPrice = parseFloat(tx.gasPrice);
        return (sum +((gasUsed * gasPrice) / 1e18)) ;
    }, 0);
  
    const ethereumPrice = await EthereumPrice.findOne().sort({createdAt : -1}).exec();
        
        return {
            status: 200,
            message: "User Details successfully fetched",
            data:{
                totalExpenses,
                ethereumPrice : ethereumPrice.price

            } ,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Internal Server Error",
        };
    }
}