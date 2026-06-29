import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(`${process.env.MONGO_URL}`||"mongodb://localhost:27017/app");




const schema = new mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    },
    visible : {
        type : Boolean,
        default : true
    }
})

const todo = mongoose.model("todos",schema);


export {todo}


