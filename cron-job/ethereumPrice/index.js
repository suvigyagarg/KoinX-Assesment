import  EthereumPrice  from "../../database-tables/models/ethereumPrice.model.js";
import { ETHEREUM_PRICE_API } from "../../constants/api-constants.js";
import axios from "axios";
export async function SetEthereumPrice() {
 
    try {
       
        const response = await axios.get(ETHEREUM_PRICE_API);
        const data = response.data;
        const price = data?.ethereum?.inr;

        await EthereumPrice.create({ price: price });

       
    } catch (error) {
        console.error('Error in cron-job :', error.message);
    }
}
