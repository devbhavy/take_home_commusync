import z from "zod"

const inputSchema = z.object({
    title : z.string(),
    description : z.string()

});


type inputType = z.infer<typeof inputSchema>


export {inputSchema,type inputType}