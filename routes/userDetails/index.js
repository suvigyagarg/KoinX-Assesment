import {SuccessResponseHandler ,ErrorResponseHandler} from "../../utilites/ResponseHandlers.js"
import {GetUserDetails} from "../../controllers/userDetails/index.js"
import { GET_USER_DETAILS } from "../../constants/index.js"

import { Router } from "express"

const RouterHandler = Router();

export default ()=>{
    RouterHandler.get(GET_USER_DETAILS,async (req,res)=>{
        try{
            const result = await GetUserDetails(req.query);
            SuccessResponseHandler(req,res,result);
        }
        catch(error){
            ErrorResponseHandler(req, res, error);
        }
    })

    return RouterHandler;
}