import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Todo = () => {
    //https://6500396d18c34dee0cd487a9.mockapi.io/todo
    let [input,setInput]=useState();
    let [todolist,setTodo]=useState([])
    function getData(){
        axios.get("https://6500396d18c34dee0cd487a9.mockapi.io/todo",{
            timeout:1000
        })
        .then((res)=>{
            setTodo(res.data)
        }).catch(err => {
            //console.log(err);
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://6500396d18c34dee0cd487a9.mockapi.io/todo",{
            name:input
        }).then(()=>{
            getData()
        }).catch(err => {
            //console.log(err);
        });
    };
    function handleDelete(id){
        axios.delete(
            `https://6500396d18c34dee0cd487a9.mockapi.io/todo/${id}`,
            {
                timeout:1000
            }
        ).then(()=>{
            getData();
        }).catch((err)=>{
        });
    }
    console.log(todolist);
    useEffect(()=>{
            getData();
    },[todolist]);
  return (
    <center className='my-5'>
        <div className='w-50'>
            <h1>Todo App using React</h1>
            <div className='d-flex my-2 imput-group '>
                <input type='text' className='form-control'  onChange={(e)=>setInput(e.target.value)}/>
                <button className='btn btn-primary px-4 mx-2' onClick={handleSubmit}>Add</button>
            </div>
            <ul className='list-group'>
                {
                    todolist.map((res)=>{
                        return(
                        <li className=' d-flex justify-content-between list-group-item'>
                            <center><p>{res.name}</p></center>
                            <button className='btn btn-white text-danger px-2' onClick={()=>handleDelete(res.id)}><b>X</b></button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    </center>
  )
}

export default Todo;