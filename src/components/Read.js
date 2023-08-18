import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [data,setData] = useState([]);
    const [tabledark,settableDark] = useState('');
    const [inputText,setinputText] = useState('');

    function getData(){
        axios.get("https://64dde74f825d19d9bfb1b221.mockapi.io/crud")
        .then((res)=>{
            setData(res.data)
        }).catch(err => {
            console.log(err);
        });
    }
    const setToLocalStorage = (id,name,email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
    function handleDelete(id){
        axios.delete(
            `https://64dde74f825d19d9bfb1b221.mockapi.io/crud/${id}`
        ).then(()=>{
            getData();
        }).catch((err)=>{
            console.log(err)
        });
    }
    const inputhandler=(e)=>{
        setinputText(e.target.value.toLowerCase());
        console.log(inputText);
    }

    useEffect(()=>{
        getData();
    },[data]);
  return (
    <div>
        <div className="form-check form-switch mt-2">
            <input 
            className="form-check-input" 
            type="checkbox" 
            id="flexSwitchCheckDefault"
            onClick={()=>{
                if(tabledark=="table-dark"){
                    settableDark("")
                }else{
                    settableDark("table-dark")
                }
            }}/>
        </div>
        <div className="d-flex justify-content-between">
            <h2>Read operation</h2>
            <div className="mb-3">
                 <input type="search" placeholder="type here" className="form-control" 
                 onChange={inputhandler}/>
            </div>
            <Link to="/">
                <button className="btn btn-primary">Create</button>
            </Link>
        </div>
        <table className={`table ${tabledark}`}>
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            {
                data.filter((el)=>{
                    if(el==='')
                       return el;
                    else
                       return (el.name.toLowerCase().includes(inputText));
                }).map((eachData)=>{
                    return(
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>      
                                        <Link to="/update">
                                            <button className="btn btn-success px-3 " onClick={()=>
                                                setToLocalStorage(
                                                    eachData.id,
                                                    eachData.name,
                                                    eachData.email
                                                )}>Edit</button>
                                        </Link>  
                                    </td>
                                    <td>
                                        <button className="btn btn-danger px-3 ms-2" onClick={()=>handleDelete(eachData.id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Read