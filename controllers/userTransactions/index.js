import UserTransaction from "../../database-tables/models/userTransaction.model.js";
import {GET_TRANSACTIONS} from "../../constants/api-constants.js"
import axios from "axios";
export const GetUserTransaction = async (data) => {
    try {
       const { userAddress } = data;
       const APIKEY = process.env.ETHERSCAN_API_TOKEN;
       const response = await axios.get(`${GET_TRANSACTIONS} &page=1&offset=10&address=${userAddress}&apikey=${APIKEY}`);
      if(response?.data?.status === "0") {
        return {
            status: 401,
            message: response.data.result,
        }
       };
       const result = response.data.result;

     const UserTransactions =  await UserTransaction.findOneAndUpdate(
        { userAddress: userAddress },
        { $set: { transactions: result } },
        { upsert: true, new: true }
    );

        return {
            status: 200,
            message: "User Transactions successfully fetched",
            data: UserTransactions.transactions, 
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: "Internal Server Error",
        };
    }
}