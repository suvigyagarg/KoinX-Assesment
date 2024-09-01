import {SuccessResponseHandler ,ErrorResponseHandler} from "../../utilites/ResponseHandlers.js"
import {GetUserTransaction} from "../../controllers/userTransactions/index.js"
import { GET_USER_TRANSACTION } from "../../constants/index.js"

import { Router } from "express"

const RouterHandler = Router();

export default ()=>{
    RouterHandler.get(GET_USER_TRANSACTION,async (req,res)=>{
        try{
            const result = await GetUserTransaction(req.query);
            SuccessResponseHandler(req,res,result);
        }
        catch(error){
            ErrorResponseHandler(req, res, error);
        }
    })

    return RouterHandler;
}