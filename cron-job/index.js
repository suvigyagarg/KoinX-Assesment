import cron from "node-cron";
import { SetEthereumPrice } from "./ethereumPrice/index.js";

export default ()=>{
    cron.schedule("*/10 * * * *", async () => {
        await SetEthereumPrice();
        console.log("cron job executed");
      });   
}