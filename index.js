import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import MountAPI from "./routes/index.js";
import { connectDB } from "./database-tables/connect.js";
import cronJob from "./cron-job/index.js";


dotenv.config();
const application = express();
const PORT = process.env.PORT || 3000;


application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true }));


connectDB();
cronJob();

application.get("/health",(req,res)=>

    res.status(200).json({
        status: 200,
        message: "Working!",
      }),
)
application.use("/api", MountAPI());

application.use("*", (req, res) =>
    res.status(404).json({
      status: 404,
      message: "Sorry, the requested url does not found!",
    }),
  );

application.listen(
PORT  , ()=>{
    console.log(`Application is running on port ${PORT}`)
}
)