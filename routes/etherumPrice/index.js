import {SuccessResponseHandler ,ErrorResponseHandler} from "../../utilites/ResponseHandlers.js"
import {GetEthereumPrice} from "../../controllers/ethereumPrice/index.js"
import { GET_ETHEREUM_PRICE } from "../../constants/index.js"

import { Router } from "express"

const RouterHandler = Router();

export default ()=>{
    RouterHandler.get(GET_ETHEREUM_PRICE,async (req,res)=>{
        try{
            const result = await GetEthereumPrice();
            SuccessResponseHandler(req,res,result);
        }
        catch(error){
            ErrorResponseHandler(req, res, error);
        }
    })

    return RouterHandler;
}