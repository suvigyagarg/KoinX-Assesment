import { Router } from "express";
import EtherumPriceRoutes from "./etherumPrice/index.js";
import UserTransactionRoutes from "./userTransactions/index.js";
import UserDetailsRoutes from "./userDetails/index.js";
const RouteHandler =Router();

export default ()=>{
RouteHandler.use("/ethereum-price",EtherumPriceRoutes());
RouteHandler.use("/user-transaction",UserTransactionRoutes());
RouteHandler.use("/user-details",UserDetailsRoutes());


return RouteHandler ;
}