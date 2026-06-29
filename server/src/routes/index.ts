import express from "express"
import { todo } from "../lib/mongoose.js";
import { inputSchema, type inputType } from "../lib/zod.js";
const rootRouter = express.Router();



rootRouter.get("/fetch-todos",async function(req,res){
    try{
        const todos = await todo.find({
            visible :true
        });
        return res.status(200).json({
            todos  
        })

    }catch(err){
        return res.status(400).json({
            msg : "some error occurred fetching the data"
        })

    }

})

rootRouter.post("/create-todo",async function(req,res){
    const input : inputType = req.body;
    if(inputSchema.safeParse(input).success){
        try{
            const response = await todo.create(input);
            return res.status(200).json({
                msg : "data succesfully added",
                response
            })

        }catch(err){
            return res.status(500).json({
                msg : "some error occurred processing your request"
            })

        }
    }else{
        res.status(400).json({
            msg : "invalid input"
        })

    }
    
})
rootRouter.delete("/remove-todo/:id",async function(req,res){
    const id = req.params.id;
    try{
        await todo.updateOne(
            {
                _id : `${id}`
                
            },
            {
                $set : {
                    visible : false
                }
            }
            
        )
        console.log("")
        res.status(200).json({
            msg : "successfully deleted todo"
        })

    }catch(err){
        res.status(500).json({
            msg : "internal server error"
        })

    }

    
})

rootRouter.put("/mark-complete/:id",async function(req,res){
    const id = req.params.id;
    try{
        await todo.updateOne({
            _id : id
        },{
            completed : true

        })

        res.json({
            msg : "success"
        })
    }catch(err){
        res.status(500).json({
            msg : "internal server error"
        })

    }
})


export {rootRouter}