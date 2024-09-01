import EthereumPrice from "../../database-tables/models/ethereumPrice.model.js";
export const GetEthereumPrice = async () => {
  try {
    const data = await EthereumPrice.findOne().sort({createdAt : -1}).exec();

    if(!data) throw new Error("No data found");
    
    return {
      status: 200,
      message: "Ethereum Price successfully fetched",
      data: data.price,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
