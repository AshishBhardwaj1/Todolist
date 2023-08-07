import React, { useEffect, useState } from 'react'
import './todolist.css'

export default function TodoList() {
// const getData = () =>{
//   const lists = localStorage.getItem("mytodolist")
//   if (lists){
//     return JSON.parse(lists)

//   }else{
//     return []
//   }

    const[todo,settodo] =useState([])
    const [input, setinput] =useState('')
    const [editmode,seteditmode] =useState(false)
    const [editid ,seteditid] =useState(null)
    const [editval,seteditval] =useState('')
   
    const addtodo=()=>{
if (input.trim()!==''){
    const newtodo ={
        id: new Date().getTime(),
        text:input
    }
    settodo([...todo,newtodo])
    setinput('')
}
    }
    const deltodo =(id)=>{
const updatetodo =todo.filter((todos)=>
todos.id !== id);
settodo(updatetodo);
    }
    const editTodo =(id,text)=>{
seteditmode(true)
seteditid(id)
seteditval(text)
    }
    const update = ()=>{
        const updatetodo = todo.map((todos)=>{
          if (todos.id ===editid){
            return {...todos,text:editval}
          }  
          return todos;
        })
        settodo(updatetodo);
        seteditid(null)
        seteditmode(false)
        seteditval('')
  
    }
    
//     useEffect(()=>{
// localStorage.setItem("mytodolist", todo)
//     },[todo])
  return (
    
    <div>
        <div className="to-do" >
            <h1>To Do List <i class="fa-regular fa-clipboard fa-2xl" style={{color: "#1f5149;"}}></i></h1>
            <input type="text" value={input} onChange={(e)=>setinput(e.target.value) } placeholder='write notes here...' name="" id="" />
          {
            editmode? (
                <div> <input type='text' value={editval} onChange={(e)=>seteditval(e.target.value)}/> 
                <button  onClick={update}>update</button></div> 
            ):(
                <button  onClick={addtodo}>Add</button>
            )
          }
       
            <ul>

                {
                todo.map((todos)=>(
<li key ={todos.id}>
  <div className='lists'>

  {todos.text}
  </div>
<div>
<button  onClick={()=>deltodo(todos.id)}><i class="fa-solid fa-trash-can fa-xl" style={{color: "#fff"}}></i> </button>
   <button  onClick={()=>editTodo(todos.id,todos.text)}><i class="far fa-edit fa-lg" style={{color:"#fff"}}></i> </button> 
   </div> </li>
                ))
                }
            </ul>
        </div>
    </div>
  )

              }