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
            //console.log(err);
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
        });
    }
    const inputhandler=(e)=>{
        setinputText(e.target.value.toLowerCase());
        //console.log(inputText);
    }

    useEffect(()=>{
        getData();
    },[data]);
  return (
    <div>
        <div className='col-2 d-flex justify-content-left'>
            <label>White</label>
            <div className="form-check form-switch ms-2">
                <input 
                className="form-check-input" 
                type="checkbox" 
                id="flexSwitchCheckDefault"
                onClick={()=>{
                    if(tabledark==="table-dark"){
                        settableDark("")
                    }else{
                        settableDark("table-dark")
                    }
                }}/>
            </div>
            <label>Dark</label>
        </div>
        <div className="row d-flex justify-content-between bg-light">
            <h2 className="bg-light py-3">Read operation</h2>
            <div className="col-lg-4 col-sm-6 col-md-6 pb-3">
                 <input type="search" placeholder="search here" className="form-control" 
                 onChange={inputhandler}/>
            </div>
            <Link to="/" className="col-6 col-md-4 pb-3">
                <button className=" btn btn-primary px-5">Create</button>
            </Link>
        </div>
        <div className='table-responsive'>
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
                                            <Link to="/update" className="btn btn-success px-3 " onClick={()=>
                                                    setToLocalStorage(
                                                        eachData.id,
                                                        eachData.name,
                                                        eachData.email
                                                    )}>Edit
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
    </div>
  )
}

export default Read