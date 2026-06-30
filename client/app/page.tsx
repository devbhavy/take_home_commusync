"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { jetbrains, pixel } from "./layout";

interface inputType{
  title : string,
  description : string
}

export default function App(){
  const [loading,setLoading] = useState(false);
  const [todos,setTodos] = useState([]);

  const [input,setInput] = useState<inputType>({
    title : "",
    description : ""
  })

  function handleChange(e : any){
    const value = e.target.value;
    const key = e.target.name;

    setInput((prev)=>{
      return {
        ...prev,
        [key] : value
      }
    })

  }
  async function handleSubmit(){
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/create-todo`,input)

  }

  async function handleDelete(_id : string){
    console.log(`handle delete ${_id}`);
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/remove-todo/${_id}`);
    setTodos((prev : any)=>{
      return prev.filter((data : any)=>{
        if(data._id==_id){
          return false
        }
        return true
      })
    })

  }

  async function handlePut(_id:string){
    console.log(`handle put ${_id}`);
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/mark-complete/${_id}`);
    setTodos((prev:any)=>{
      return prev.map((data:any)=>{
        if(data._id==_id){
          return {
            ...data,
            "completed" : true
          }
        }else{
          return data
        }
      })
    })
  }

  useEffect(()=>{
    (async ()=>{
      setLoading(true);
      try{
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetch-todos`);
        console.log(data.todos)
        setTodos(data.todos);

      }catch(err){
        alert("Some error occurred fetching the data!")

      }finally{
        setLoading(false)
      }

    })()

    
  },[])


  return(
    <div className={"h-lvh bg-black flex justify-center items-center "+jetbrains.className}>
      <div className="bg-white inline-block p-5 rounded-2xl">
      <div className={"text-5xl font-bold text-white bg-black p-2 " + pixel.className}>
       Mini Task Manager
      </div>
      <form onSubmit={handleSubmit} className="my-2 flex flex-col gap-2">
        <div><input name="title" placeholder="Enter a Title" onChange={handleChange} value={input.title} className="border-2 p-1" required></input></div>
        <div><input name="description" placeholder="Enter a Description" onChange={handleChange} value={input.description} className="border-2 p-1" required></input></div>
        <div><button type="submit" className="border-2 p-1 rounded-full hover:bg-green-400 cursor-pointer">Add todo</button></div>
      </form>
      <div>
        <div className="font-bold underline">Todos :</div>
        {
          loading?<div>loading...</div>
          :
          todos?<div className="max-h-80 overflow-y-auto border-2">
          {
            todos.map((todo:any,index)=>{
              return (
                <div key={index} className="border-2 rounded-2xl p-2 m-1 flex flex-col gap-0.5">

                  <div>{todo.title}</div>
                  <div>{todo.description}</div>
                  <div>
                    <button onClick={()=>handleDelete(todo._id)} className="border-2 p-1 rounded-full hover:bg-red-400 cursor-pointer">delete todo</button>
                  </div>
                  {
                    (!todo.completed)?<div>
                      <button onClick={()=>handlePut(todo._id)} className="border-2 p-1 rounded-full hover:bg-green-400 cursor-pointer">mark as complete</button>
                    </div> : <div className="font-bold">
                      Done!
                    </div>
                  }
                </div>
              )
            })
          }
        </div>:
        <div>
          Failed to fetch todos!
        </div>
        }

      </div>
    </div>
    </div>

  )
 
}