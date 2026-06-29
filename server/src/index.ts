import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { rootRouter } from "./routes/index.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

app.get("/",function(req,res){
    res.json({
        msg : "server is working"
    })
})

app.use("/api",rootRouter);

app.listen(process.env.port,function(){
    console.log(`server running on port ${process.env.port}`)
})