import { Router } from "express";
import UserTransactionRoutes from "./userTransactions/index.js";
import UserDetailsRoutes from "./userDetails/index.js";
const RouteHandler =Router();

export default ()=>{
RouteHandler.use("/user-transactions",UserTransactionRoutes());
RouteHandler.use("/user-details",UserDetailsRoutes());

return RouteHandler ;
}